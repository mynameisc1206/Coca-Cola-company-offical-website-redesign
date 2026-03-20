function initAOS() {
    if (window.innerWidth > 0) {
        AOS.init({
            once: false,
            duration: 800,
            offset: 200,
            easing: 'ease-out-cubic'
        });
    } else {
        // 모바일이면 AOS 완전 제거
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            el.removeAttribute('data-aos');
            el.removeAttribute('data-aos-delay');
            el.removeAttribute('data-aos-duration');
        });
    }
}

window.addEventListener('load', initAOS);