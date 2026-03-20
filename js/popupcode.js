document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.swiper-slide');
  const popups = document.querySelectorAll('.comunity-act');
  const popupBlur = document.querySelector('.popup-blur');
  const closeBtns = document.querySelectorAll('.popup-close-btn');

  // 순환 네비게이션을 위한 팝업 배열화
  const popupArray = Array.from(popups);

  // 공통: 모든 팝업 닫기 함수
  const closeAll = () => {
    popups.forEach(p => p.classList.remove('active'));
    popupBlur.classList.remove('on');
    document.body.style.overflow = ''; // 메인 스크롤 복구
  };

  // 1. 슬라이드 클릭 시 해당 팝업 열기
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      const targetId = slide.getAttribute('data-tab');
      const targetPopup = document.getElementById(targetId);

      if (targetPopup) {
        targetPopup.classList.add('active');
        popupBlur.classList.add('on');
        window.scrollTo(0, 0);
      }
    });
  });

  // 2. 닫기 버튼 및 배경 클릭 시 닫기
  closeBtns.forEach(btn => btn.addEventListener('click', closeAll));
  popupBlur.addEventListener('click', closeAll);

  // 3. 이전/다음 전환 함수 (순환 로직)
  function switchPopup(currentPopup, direction) {
    const currentIndex = popupArray.indexOf(currentPopup);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % popupArray.length; // 마지막에서 다음 누르면 처음으로
    } else {
      nextIndex = (currentIndex - 1 + popupArray.length) % popupArray.length; // 처음에서 이전 누르면 마지막으로
    }

    currentPopup.classList.remove('active');
    const nextPopup = popupArray[nextIndex];
    
    nextPopup.classList.add('active');
    window.scrollTo(0, 0); // 전환 시 새 팝업 스크롤 상단 고정
  }

  // 4. 각 팝업 내부의 이전/다음 버튼에 이벤트 연결
  popups.forEach(popup => {
    const prevBtn = popup.querySelector('.popup-prev-btn');
    const nextBtn = popup.querySelector('.popup-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        switchPopup(popup, 'prev');
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        switchPopup(popup, 'next');
      });
    }
  });
});