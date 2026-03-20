const $history = document.querySelector("#history");
const $list = document.querySelector("#historyList");

if (!$history || !$list) {
    console.warn("[history] #history 또는 #historyList 없음");
}

/* ---------------------------
   1) HTML 이스케이프
--------------------------- */
function escapeHtml(str = "") {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* ---------------------------
   2) 렌더링
--------------------------- */
function renderHistory(data) {
    const sorted = [...data].sort((a, b) => (a.sortKey ?? 0) - (b.sortKey ?? 0));

    $list.innerHTML = sorted
        .map((group) => {
            const yearLabel = escapeHtml(group.yearLabel ?? "");
            const lines = Array.isArray(group.text?.lines) ? group.text.lines : [];
            const img = group.image ? escapeHtml(group.image) : "";

            const textHtml = `
        <div class="history-col history-col--text">
          <div class="history-col__inner">
            ${yearLabel ? `<h3 class="history-year">${yearLabel}</h3>` : ""}
            ${lines.length
                    ? `<div class="history-text">
                    ${lines.map((l) => `<p class="history-line">${escapeHtml(l)}</p>`).join("")}
                   </div>`
                    : ""
                }
          </div>
        </div>
      `;

            const mediaHtml = img
                ? `
          <div class="history-col history-col--media">
            <figure class="history-media">
              <img src="${img}" alt="" loading="eager" />
            </figure>
          </div>
        `
                : `<div class="history-col history-col--media"></div>`;

            return `
        <article class="history-item">
          ${textHtml}
          ${mediaHtml}
        </article>
      `;
        })
        .join("");
}

/* historyData가 전역에 있다고 가정 */
renderHistory(historyData);

/* ---------------------------
   3) dotY 기준 item 트리거 계산/동기화
--------------------------- */
let items = [];
let triggerYs = [];
let railH = 0;

function computeItemTriggers() {
    if (!$history) return;

    const railEl = $history.querySelector(".history__rail");
    if (!railEl) return;

    const railRect = railEl.getBoundingClientRect();
    railH = railRect.height;

    items = Array.from($history.querySelectorAll(".history-item"));
    triggerYs = items.map((el) => {
        const r = el.getBoundingClientRect();
        let y = r.top - railRect.top; // 레일 시작점 기준
        y = Math.max(0, Math.min(railH, y));
        return y;
    });
}

function syncItemsByDot(dotY) {
    for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (!el) continue;
        if (dotY >= triggerYs[i]) el.classList.add("aos-animate");
        else el.classList.remove("aos-animate");
    }
}

/* ---------------------------
   4) 타임라인 계산 (기존 방식 유지)
--------------------------- */
let ticking = false;
let isActive = false;
let isFadingOut = false;

const DOT_FADE_MS = 320;

function clamp01(n) {
    return Math.max(0, Math.min(1, n));
}

function resetTimeline() {
    if (!$history) return;
    $history.style.setProperty("--progress", 0);
    $history.style.setProperty("--dotY", `0px`);
    syncItemsByDot(0);
}

function setDotByProgress(progress) {
    const railEl = $history.querySelector(".history__rail");
    const _railH = railEl ? railEl.getBoundingClientRect().height : 0;
    const dotY = progress * _railH;

    $history.style.setProperty("--progress", progress);
    $history.style.setProperty("--dotY", `${dotY}px`);
    syncItemsByDot(dotY);

    return { dotY, railH: _railH };
}

function fadeOutDotThenReset() {
    if (isFadingOut) return;
    isFadingOut = true;

    // dot만 페이드아웃 (위치/진행은 유지)
    $history.classList.remove("is-active");

    window.setTimeout(() => {
        resetTimeline();
        isFadingOut = false;
    }, DOT_FADE_MS);
}

/* ---------------------------
   5) 스크롤 기준 활성화/이탈 제어 (IO 제거)
   - startLine(vh*0.3)이 섹션 내부에 있으면 활성화
   - 아래로 벗어날 때: progress=1(끝) 도달 후에만 페이드아웃
--------------------------- */
function updateTimeline() {
    if (!$history) return;

    const rect = $history.getBoundingClientRect();
    const vh = window.innerHeight;

    //  너가 쓰던 start/end 그대로
    const startLine = vh * 0.3;
    const endLine = vh * 1;

    // startLine이 섹션 내부에 들어온 순간부터 활성화
    const shouldBeActive = rect.top <= startLine && rect.bottom >= startLine;

    // 활성화 진입
    if (shouldBeActive && !isActive) {
        isActive = true;
        isFadingOut = false;

        // dot 부드럽게 등장
        $history.classList.add("is-active");

        // 트리거 재계산
        computeItemTriggers();

        // 진입 순간: 시작점에서 첫 item이 바로 뜨게
        syncItemsByDot(0);
    }

    // 비활성(위로 되돌아감)
    if (!shouldBeActive && isActive && rect.top > startLine) {
        isActive = false;
        isFadingOut = false;

        $history.classList.remove("is-active");
        resetTimeline();
        ticking = false;
        return;
    }

    // 비활성(아래로 완전히 지나감)
    // 핵심: "끝까지 도달(progress=1)"을 먼저 보장하고,
    // 그 다음 섹션이 startLine 위로 완전히 올라가면(=rect.bottom < startLine) 페이드아웃
    if (!shouldBeActive && isActive && rect.bottom < startLine) {
        // 끝까지 도달 상태로 고정해서 마지막 item도 무조건 뜨게
        setDotByProgress(1);

        // 이제 페이드아웃
        isActive = false;
        fadeOutDotThenReset();

        ticking = false;
        return;
    }

    // 활성 상태에서만 진행 업데이트
    if (isActive && !isFadingOut) {
        // 기존 진행 계산식 유지
        const total = rect.height - (startLine + (vh - endLine));
        const current = startLine - rect.top;

        const progress = total > 0 ? clamp01(current / total) : 0;
        setDotByProgress(progress);
    }

    ticking = false;
}

function onScrollOrResize() {
    if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTimeline);
    }
}

/* ---------------------------
   6) 리사이즈/이미지 로드 시 재계산
--------------------------- */
window.addEventListener("scroll", onScrollOrResize, { passive: true });
window.addEventListener("resize", () => {
    computeItemTriggers();
    onScrollOrResize();
});

const imgs = document.querySelectorAll("#historyList img");
imgs.forEach((img) => {
    if (img.complete) return;
    img.addEventListener(
        "load",
        () => {
            computeItemTriggers();
            onScrollOrResize();
        },
        { once: true }
    );
    img.addEventListener(
        "error",
        () => {
            computeItemTriggers();
            onScrollOrResize();
        },
        { once: true }
    );
});

// 초기 1회
computeItemTriggers();
updateTimeline();
