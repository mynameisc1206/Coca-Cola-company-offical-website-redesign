const selects = document.querySelectorAll('.select');
const header = document.querySelector('.header');

selects.forEach(select => {
  const hoverText = select.querySelector('.hover-text');

  select.addEventListener('mouseenter', () => {
    selects.forEach(other => {
      const otherText = other.querySelector('.hover-text');
      if (otherText) otherText.classList.remove('on');
    });

    hoverText.classList.add('on');
  });
});
header.addEventListener('mouseleave', () => {
  selects.forEach(select => {
    const hoverText = select.querySelector('.hover-text');
    if (hoverText) hoverText.classList.remove('on');
  });
});


let menuToggle = document.querySelector('.menu-toggle');
let mobileMenu = document.querySelector('.mobile-menu');
let menuItems = document.querySelectorAll('.mobile-menu-item');

menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// 아코디언 메뉴 로직
menuItems.forEach(item => {
  const title = item.querySelector('.menu-title-select');
  
  if (title) {
    title.addEventListener('click', function(e) {
      e.preventDefault();

      const isActive = item.classList.contains('active');

      menuItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherList = otherItem.querySelector('.menu-select');
        if(otherList) otherList.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
        const subMenu = item.querySelector('.menu-select');
        if(subMenu) subMenu.classList.add('active');
      }
    });
  }
});

// 헤더 자바스크립트 코드


document.addEventListener('DOMContentLoaded', () => {
  const serviceSections = document.querySelectorAll('.footer-service');

  serviceSections.forEach(section => {
    const header = section.querySelector('h4');

    header.addEventListener('click', () => {
      // 768px 이하(모바일 환경)에서만 동작
      if (window.innerWidth <= 768) {        
        const isOpen = section.classList.contains('is-active');

        serviceSections.forEach(s => s.classList.remove('is-active'));

        if (!isOpen) {
          section.classList.add('is-active');
        }
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      serviceSections.forEach(s => s.classList.remove('is-active'));
    }
  });
});
// 푸터 자바스크립트 코드

