// 섹션 1
(() => {
    const section = document.querySelector('#brandIntro');
    if (!section) return;
  
    //  여기만 바꾸면 duration 변경됨 (ms)
    const COUNT_DURATION_MS = 1500;
  
    // 고정 헤더 있으면 클래스 하나로 정확히 바꿔줘
    const header = document.querySelector('.header, .gnb, .nav');
    const getHeaderH = () => (header ? header.getBoundingClientRect().height : 0);
  
    const nums = Array.from(section.querySelectorAll('.stat__num'));
    const originals = new Map();
  
    //  "0 1886년" 같은 앞 0 제거해서 원본 저장
    function cleanOriginalText(text) {
      return String(text || "")
        .replace(/^\s*0+\s*/g, "")   // 맨 앞의 0, 공백 제거
        .replace(/\s+/g, " ")       // 중복 공백 정리
        .trim();
    }
  
    nums.forEach((el) => {
      originals.set(el, cleanOriginalText(el.textContent));
    });
  
    function parseTarget(text) {
      const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
      return Number.isFinite(n) ? n : 0;
    }
  
    function formatCount(originalText, value) {
      const v = Math.round(value);
  
      //  카운트 중에는 "0 " 같은 접두사 절대 안 붙임
      if (originalText.includes('년')) return `${v}년`;
      if (originalText.includes('+')) return `${v}+`;
      if (originalText.includes('억')) {
        if (originalText.includes('잔')) return `${v}억 잔`;
        return `${v}억`;
      }
      return `${v}`;
    }
  
    const clamp01 = (v) => Math.max(0, Math.min(1, v));
  
    let rafId = null;
    let mergedPrev = false;
    let counting = false;
  
    function stopCount() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      counting = false;
    }
  
    function restoreOriginals() {
      nums.forEach((el) => {
        el.textContent = originals.get(el) || "";
      });
    }
  
    function runMergedCount(durationMs) {
      if (counting) return; // 중복 실행 방지
      counting = true;
  
      const start = performance.now();
  
      const tick = (now) => {
        const t = clamp01((now - start) / durationMs);
  
        nums.forEach((el) => {
          const original = originals.get(el) || '';
          const target = parseTarget(original);
          el.textContent = formatCount(original, target * t);
        });
  
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          rafId = null;
          counting = false;
          restoreOriginals(); //  끝나면 원래 텍스트로 복귀(0 없음)
        }
      };
  
      rafId = requestAnimationFrame(tick);
    }
  
    function update() {
      const rect = section.getBoundingClientRect();
      const headerH = getHeaderH();
  
      const merged = rect.top <= headerH;
  
      // 패널 show/hide
      if (merged) {
        section.style.setProperty('--panelOffset', '0px');
        section.style.setProperty('--panelOpacity', '1');
      } else {
        section.style.setProperty('--panelOffset', '80px');
        section.style.setProperty('--panelOpacity', '0');
      }
  
      section.classList.toggle('is-merged', merged);
  
      //  합쳐지는 순간에만 카운트 시작
      if (!mergedPrev && merged) {
        stopCount();                 // 혹시 남아있으면 정리
        restoreOriginals();          // 시작 전에 원문 한번 정리
        runMergedCount(COUNT_DURATION_MS);
        // console.log('COUNT START', COUNT_DURATION_MS); // 필요하면 확인용
      }
  
      // 합쳐짐 해제되면 즉시 원문 복구 + 카운트 중지
      if (mergedPrev && !merged) {
        stopCount();
        restoreOriginals();
      }
  
      mergedPrev = merged;
    }
  
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
  
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => requestAnimationFrame(update));
    update();
  })();

// 섹션 2
(() => {
    const section = document.querySelector('#cokeTimeline');
    if (!section) return;
  
    const track = section.querySelector('.timeline__track');
    const dot = section.querySelector('.timeline__dot');
  
    const clamp01 = (v) => Math.max(0, Math.min(1, v));
  
    function update() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
  
      // 섹션이 화면에 들어오기 전/후 처리
      const start = vh * -.1; // 섹션 시작 감도
      const end = vh * .55;   // 섹션 끝 감도
  
      // 섹션 진행(0~1) : rect.top이 start~(-something)로 움직일 때 증가
      const scrollable = section.offsetHeight - vh;
      const raw = (-rect.top + start) / (scrollable + (start + (vh - end)));
      const p = clamp01(raw);
  
      section.style.setProperty('--p', p.toFixed(4));
  
      // dot 위치(px)
      const trackH = track.getBoundingClientRect().height;
      const dotSize = 10;
      const dotY = p * (trackH - dotSize);
      dot.style.transform = `translate(-50%, ${dotY}px)`;
    }
  
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
  
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => requestAnimationFrame(update));
    window.addEventListener('load', () => requestAnimationFrame(update));
    update();
  })();

  // aos 로드
  window.addEventListener('load', () => {
    if (window.AOS) window.AOS.refresh();
  });

// 섹션 3
(() => {
  const section = document.querySelector(".pin-section");
  const track = section.querySelector(".pin-section__track");
  const cards = section.querySelector(".pin-section__cards");

  let travel = 0;
  let isDesktop = window.innerWidth > 1024;

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function setup() {
    isDesktop = window.innerWidth > 1024;

    if (!isDesktop) {
      //  모바일에서는 스크롤 고정 제거
      section.style.height = "auto";
      cards.style.transform = "none";
      return;
    }

    const cardsHeight = cards.scrollHeight;
    const trackHeight = track.clientHeight;
    const offsetTop = 650;

    travel = cardsHeight - trackHeight + offsetTop;

    section.style.height = `${window.innerHeight + travel}px`;
  }

  function update() {
    if (!isDesktop) return;

    const rect = section.getBoundingClientRect();
    const scrollStart = rect.top + window.scrollY;

    const current = window.scrollY - scrollStart;
    const progress = clamp(current / travel, 0, 1);

    const y = -progress * travel;

    cards.style.transform = `translateY(${y}px)`;
  }

  window.addEventListener("scroll", () => {
    if (isDesktop) {
      requestAnimationFrame(update);
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    setup();
  });

  window.addEventListener("load", setup);

  setup();
})();

// 섹션 4
(() => {
  const section = document.querySelector("#whoPin");
  if (!section) return;

  const leftDeck = section.querySelector(".imgDeck--left");
  const rightDeck = section.querySelector(".imgDeck--right");
  if (!leftDeck || !rightDeck) return;

  const leftCards = Array.from(leftDeck.querySelectorAll(".imgCard"));
  const rightCards = Array.from(rightDeck.querySelectorAll(".imgCard"));
  const N = Math.min(leftCards.length, rightCards.length); // 3

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const TUNE = {
    farX: 0.2,
    stackX1: 0.34,
    stackX2: 0.52,

    frontScale: 1,
    backScale1: 0.84,
    backScale2: 0.68,
    stackY: 24,

    exitX: 0.72,
    exitY: -34,
    fadeStart: 0.45,

    rotZFront: 0,
    rotYFront: 10,
    rotZBack: 0,
    rotYBack: 10,

    scrollLenVH: 1.5,

    //  텍스트 채움 구간(전체 p에서 0~1)
    fillStart: 0.0,
    fillEnd: 1.0,

    //  1줄이 먼저 끝나고 2줄로 넘어가는 분기점
    // 0.5면 정확히 반반, 0.45면 1줄을 더 빨리 끝냄
    textSplit: 0.5,
  };

  let scrollLen = 0;
  let raf = null;
  let deckW_L = 0;
  let deckW_R = 0;

  function measure() {
    scrollLen = window.innerHeight * TUNE.scrollLenVH;
    section.style.height = `${window.innerHeight + scrollLen}px`;

    deckW_L = leftDeck.getBoundingClientRect().width || 0;
    deckW_R = rightDeck.getBoundingClientRect().width || 0;
  }

  function getProgress() {
    const rect = section.getBoundingClientRect();
    const start = rect.top + window.scrollY;
    const scrolled = window.scrollY - start;
    return scrollLen ? clamp(scrolled / scrollLen, 0, 1) : 0;
  }

  function depthState(rel) {
    if (rel <= 0) return { s: TUNE.frontScale, y: 0, blur: 0, o: 1 };
    if (rel === 1) return { s: TUNE.backScale1, y: TUNE.stackY, blur: 0.8, o: 1 };
    return { s: TUNE.backScale2, y: TUNE.stackY * 2, blur: 1.6, o: 1 };
  }

  function baseXFor(rel, sideSign, vw, deckW) {
    const outer = sideSign * (vw * TUNE.farX);
    const towardCenter = -sideSign;

    if (rel === 1) return outer + towardCenter * (deckW * TUNE.stackX1);
    if (rel >= 2) return outer + towardCenter * (deckW * TUNE.stackX2);
    return outer;
  }

  function poseCard(el, sideSign, rel, t, vw, deckW) {
    const tt = easeOut(t);

    const rotY = (rel === 0 ? TUNE.rotYFront : TUNE.rotYBack) * -sideSign;
    const rotZ = (rel === 0 ? TUNE.rotZFront : TUNE.rotZBack) * -sideSign;

    const base = depthState(rel);
    const baseX = baseXFor(rel, sideSign, vw, deckW);

    if (rel < 0) {
      const x = baseX + sideSign * (vw * TUNE.exitX);
      el.style.transform = `translate(${x}px, ${TUNE.exitY}px) scale(${TUNE.frontScale + 0.10}) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      el.style.opacity = "0";
      el.style.filter = "blur(0px)";
      el.style.zIndex = "1";
      return;
    }

    if (rel === 0) {
      const x = lerp(baseX, baseX + sideSign * (vw * TUNE.exitX), tt);
      const y = lerp(0, TUNE.exitY, tt);
      const s = lerp(base.s, base.s + 0.14, tt);
      const o = lerp(1, 0, clamp((t - TUNE.fadeStart) / (1 - TUNE.fadeStart), 0, 1));

      el.style.transform = `translate(${x}px, ${y}px) scale(${s}) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      el.style.opacity = String(o);
      el.style.filter = "blur(0px)";
      el.style.zIndex = "30";
      return;
    }

    const from = depthState(rel);
    const to = depthState(rel - 1);

    const fromX = baseXFor(rel, sideSign, vw, deckW);
    const toX = baseXFor(rel - 1, sideSign, vw, deckW);

    const x = lerp(fromX, toX, tt);
    const y = lerp(from.y, to.y, tt);
    const s = lerp(from.s, to.s, tt);
    const blur = lerp(from.blur, to.blur, tt);

    el.style.transform = `translate(${x}px, ${y}px) scale(${s}) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
    el.style.opacity = "1";
    el.style.filter = `blur(${blur}px)`;
    el.style.zIndex = String(30 - rel);
  }

  function render() {
    raf = null;

    const p = getProgress();
    const vw = window.innerWidth;

    //  텍스트: 1줄 → 2줄 순차 채움
    const raw = clamp((p - TUNE.fillStart) / (TUNE.fillEnd - TUNE.fillStart), 0, 1);
    const t = easeOut(raw);

    const split = TUNE.textSplit; // 0.5 권장
    const fill1 = clamp(t / split, 0, 1);
    const fill2 = clamp((t - split) / (1 - split), 0, 1);

    section.style.setProperty("--fill1", fill1.toFixed(4));
    section.style.setProperty("--fill2", fill2.toFixed(4));

    //  이미지 덱 전환(기존 유지)
    const stages = N;
    const rawStage = p * stages;
    const stage = clamp(Math.floor(rawStage), 0, stages - 1);
    const tt = clamp(rawStage - stage, 0, 1);

    leftCards.forEach((el, i) => poseCard(el, -1, i - stage, tt, vw, deckW_L));
    rightCards.forEach((el, i) => poseCard(el, +1, i - stage, tt, vw, deckW_R));
  }

  function onScroll() {
    if (raf) return;
    raf = requestAnimationFrame(render);
  }

  window.addEventListener("load", () => {
    measure();
    render();
  });

  window.addEventListener("resize", () => {
    measure();
    render();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  
  measure();
  render();
})();
