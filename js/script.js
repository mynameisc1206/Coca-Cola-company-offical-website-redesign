
(() => {
  const section = document.getElementById("historyCta");
  const bottomText = document.getElementById("bottomText");
  const bottomLine = section.querySelector(".bottom-line");

  function pxVar(name, fallback) {
    const v = getComputedStyle(section).getPropertyValue(name).trim();
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function measure() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      section.style.setProperty("--bottomStart", `0px`);
      section.style.setProperty("--bottomTarget", `0px`);

      const bottomLineWidth = bottomLine.offsetWidth;
      section.style.setProperty("--bottom-line-width", `${bottomLineWidth}px`);
      return;
    }
    
    const bottomLineRect = bottomLine.getBoundingClientRect();
    const bottomRect = bottomText.getBoundingClientRect();

    const bottomStart = Math.round(-bottomLineRect.left);

    const gap = pxVar("--bottomGap", 100);
    let target = Math.max(0, Math.round(bottomRect.left - gap));

    const maxLen = pxVar("--bottomMax", 99999);
    target = Math.min(target, maxLen);

    section.style.setProperty("--bottomStart", `${bottomStart}px`);
    section.style.setProperty("--bottomTarget", `${target}px`);
  }

  // 스크롤 애니메이션 트리거
  function checkScroll() {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  
  // 섹션이 화면에 조금이라도 보이면 애니메이션 유지
  if (sectionTop < windowHeight * 0.8 && sectionBottom > windowHeight * 0.2) {
    section.classList.add('is-anim');
  } else {
    section.classList.remove('is-anim');
  }
}

  window.addEventListener("load", () => {
    measure();
    checkScroll();  // ← 로드 시에도 체크
  });

  window.addEventListener("resize", measure);
  
  window.addEventListener("scroll", checkScroll);  // ← 스크롤 이벤트 추가
})();



const section = document.querySelector(".magic-video");
const box = document.querySelector(".magic-video-box");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  let progress = (vh * 0.3 - rect.top) / (rect.height - vh * 0.5);
  progress = Math.max(0, Math.min(1, progress)); 
  progress = 1 - Math.pow(1 - progress, 3); 

  let videoWidth, videoHeight;

  if (progress < 0.5) {
    let t = progress / 0.5;
    videoWidth = vw - (vw - vh) * t;
    videoHeight = vh;
  } else {
    let t = (progress - 0.5) / 0.5;
    videoWidth = vh - (vh - 400) * t;
    videoHeight = videoWidth;
  }

  box.style.width = videoWidth + "px";
  box.style.height = videoHeight + "px";

  section.classList.toggle("active", progress > 0.6);
});




let tabBtn = document.querySelectorAll('.tab-btn');
let textBox = document.querySelectorAll('.brand-text-box');
let imgBox = document.querySelectorAll('.tab-img-wrap');

tabBtn.forEach(function(buttons){
  buttons.addEventListener('click', function(){
    let targetId = this.getAttribute('data-tab');

    tabBtn.forEach(b => {
      b.classList.remove('active')
    });
    textBox.forEach(t => {
      t.classList.remove('active')
    });
    imgBox.forEach(i => {
      i.classList.remove('active')
    });

    this.classList.add('active');

    textBox.forEach(text => {
      if(text.id === targetId){
        text.classList.add('active');
      }
    });

    imgBox.forEach(img => {
      if(img.id === targetId){
        img.classList.add('active')
      }
    });
  })
})