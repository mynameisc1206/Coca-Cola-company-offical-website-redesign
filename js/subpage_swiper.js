var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10, 
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 반응형 지점 설정
  breakpoints: {
    // 화면 너비가 440px 이상일 때
    440: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    // 화면 너비가 768px 이상일 때
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // 화면 너비가 1024px 이상일 때
    1024: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  },
});