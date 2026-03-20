let newsMoreBtn = document.querySelector('.news-more-btn');
let brandNewsContent = document.querySelector('.brand-news-content');

// 브랜드 소식 카드 더 보기
newsMoreBtn.addEventListener('click', function () {
    if (brandNewsContent.classList.contains('on')) {
        brandNewsContent.classList.remove('on');
        newsMoreBtn.innerHTML = '브랜드 소식 더 보기'
    }
    else {
        brandNewsContent.classList.add('on');
        newsMoreBtn.innerHTML = '브랜드 소식 닫기'
    }
})

// 팝업창 띄우기
let newsContentCard = document.querySelectorAll('.news-content-card');
let newsPopup = document.querySelectorAll('.news-popup');
let popupCloseBtn = document.querySelectorAll('.popup-close-btn');
let popupBlur = document.querySelector('.popup-blur');

// 팝업 열기
newsContentCard.forEach(function (btn) {
    btn.addEventListener('click', function () {
        newsPopup.forEach(function (pop) {
            pop.classList.remove('active');
        });

        let target = btn.getAttribute('data-news');

        newsPopup.forEach(function (pop) {
            if (pop.id === target) {
                pop.classList.add('active');
                popupBlur.classList.add('on');
                brandNewsContent.classList.add('on');
            }
        });
    });
});

// 팝업 닫기
popupCloseBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let popup = btn.closest('.news-popup');
        popup.classList.remove('active');
        popupBlur.classList.remove('on');
        brandNewsContent.classList.remove('on');
        newsMoreBtn.innerHTML = '브랜드 소식 더 보기'
    });
});

// 팝업 바깥(블러) 클릭 시 닫기
popupBlur.addEventListener('click', function () {
    newsPopup.forEach(function (pop) {
        pop.classList.remove('active');
    });

    popupBlur.classList.remove('on');
    brandNewsContent.classList.remove('on');
    newsMoreBtn.innerHTML = '브랜드 소식 더 보기'
});

// 이전/다음 팝업 전환 함수
function switchPopup(currentPopup, direction) {
    let popupArray = Array.from(newsPopup);
    let currentIndex = popupArray.indexOf(currentPopup);
    let nextIndex;

    if (direction === 'next') {
        nextIndex = (currentIndex + 1) % popupArray.length; // 마지막에서 첫번째로
    } else {
        nextIndex = (currentIndex - 1 + popupArray.length) % popupArray.length; // 첫번째에서 마지막으로
    }

    currentPopup.classList.remove('active');
    popupArray[nextIndex].classList.add('active');
    
    window.scrollTo({
        top: 0,
        // behavior: 'smooth'
    });
}

// 이전 버튼
document.querySelectorAll('.popup-prev-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        let currentPopup = btn.closest('.news-popup');
        switchPopup(currentPopup, 'prev');
    });
});

// 다음 버튼
document.querySelectorAll('.popup-next-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        let currentPopup = btn.closest('.news-popup');
        switchPopup(currentPopup, 'next');
    });
});