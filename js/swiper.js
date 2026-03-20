// 메인페이지-브랜드 소식 섹션 스와이퍼
const common = {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: -370,
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 5,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    speed: 5000,
    allowTouchMove: false,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
    0: {        // 0px ~
      spaceBetween: -220,
      loopAdditionalSlides: 5,
    },
    768: {      // 768px ~
      spaceBetween: -210,
      loopAdditionalSlides: 4,
    },
    1024: {     // 1024px ~ (원하면)
      spaceBetween: -370,
      loopAdditionalSlides: 3,
    },
  },
  };
   
  // new Swiper('.left-swiper', {
  //   ...common,
  //   autoplay: { ...common.autoplay, reverseDirection: false },
  // });
  
  // new Swiper('.right-swiper', {
  //   ...common,
  //   // initialSlide: 4,
  //   autoplay: { ...common.autoplay, reverseDirection: true },
  // });

  // 메인페이지-브랜드 소식 섹션 스와이퍼
new Swiper('.left-swiper', {
  direction: 'vertical',
  slidesPerView: 1.8,
  slidesPerGroup: 1,  // ← 추가
  spaceBetween: 24,  // ← 양수로 변경 (겹침 제거)
  loop: true,
  loopedSlides: 10,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
  },
});

new Swiper('.right-swiper', {
  direction: 'vertical',
  slidesPerView: 1.8,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  loopedSlides: 10,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
  },
});
  
  
