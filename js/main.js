

// 스크롤에 따라 사라지기 + 맨위로 올라가게(마지막)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY) //윈도우 스크롤 y가 내려갈 때마다 콘솔에 값이 적힘
    if (window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 500이하인 경우 뱃지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(사용하려는 함수, 시간)
// gsap.to(요소, 지속시간, 옵션); to > 애니메이션정하기, 옵션은 기본 객체데이터 형식

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo:0
    });
});
//버튼 위로올라가게




//새로고침후 순차적으로 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1)*.7, // 0.7, 1.4, 2.1, 2.7~
        //index는 0부터 시작. 그냥 .7이라고 하면 순차적으로 되지 않으므로 +1을 더함
        opacity:1,

    });
});


//공지사항 상하 슬라이드
new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay:true,
    loop:true
});


//공지 아래 양옆 슬라이드
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백 10px
    centeredSlides:true, // 1번 슬라이드가 가운데에 보이기
    loop:true,
    pagination:{
        el:'.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
        clickable:true, // 사용자의 페이지 번호 묘소 제어 가능 여부
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
// + 하단슬라이드
new Swiper('.awards .swiper-container', {
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});



//토글 내리고 올리기

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //지속적으로 반대값으로 변환하는 코드
    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide'); //슬라이드 부분에 hide라는 스타일이 있으면 안보이게
    } else{
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});



//이미지 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

  //선택자, 동작시간, 옵션 순서
function floatingObject (selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat:-1,      // 무한 반복
        yoyo:true,      //한번 재생된 애니메이션을 뒤로 재생 요요
        ease:Power1.easeInOut,  //사이트 참고
        delay:random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// 스크롤 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic     //체이닝 형태 메소드
        .Scene({
            triggerElement: spyEl,      //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

//특별한 옵션 감시하는 scene
//스크롤 컨트롤러를 사용하기 위해 addTo가 쓰인다

