// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    //index의 id속성 player 찾은것
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초재생할 유튜브 영상 id
    playerVars: {
        autoplay:true,  // 자동 재생 유무
        loop:true,      // 반복 재생 유무
        playlist:'An6LvWQuj_8'     //반복 재생할 유튜브 영상 id 목록
    },
    events:{
        onReady: function (event) {    //메소드(객체 데이터 안에 함수가 있을시 메소드라 불림)
            event.target.mute()     //음소거
        }
    }       //이벤트로 영상 준비가 되면 익명의 함수를 이용해 이벤트로 영상을 음소거함
  });
}

