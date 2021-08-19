// 검색버튼 입력돼있을때
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



//올해년도 자동계산 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//현재 년도가 숫자 데이터로 반환됨
