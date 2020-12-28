//header__slider
$(function () {
    $('.banner__slider').slick({
        infinite: false,
        fade: true,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        autoplay: false,
        responsive: {

        }   
    });
});

// header__slider YouTube API
let tag = document.createElement('script');



tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player,
    secondplayer,
    thirdplayer;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1000',
        width: '1920',
        videoId: 'IUN664s7N-c',
        playerVars: { 'autoplay': 0, 'controls': 0, 'fs': 1, 'iv_load_policy': 3, 'modestbranding': 1, 'rel': 0, 'showinfo': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    secondplayer = new YT.Player('secondplayer', {
        height: '1000',
        width: '1920',
        videoId: '8Z1eMy2FoX4',
        playerVars: { 'autoplay': 0, 'controls': 0, 'fs': 1, 'iv_load_policy': 3, 'modestbranding': 1, 'rel': 0, 'showinfo': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    thirdplayer = new YT.Player('thirdplayer', {
        height: '1000',
        width: '1920',
        videoId: '6lt2JfJdGSY',
        playerVars: { 'autoplay': 0, 'controls': 0, 'fs': 1, 'iv_load_policy': 3, 'modestbranding': 1, 'rel': 0, 'showinfo': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}



function onPlayerReady(event) {
    event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 30000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}


gsap.to(".moving-point", {duration: 3, x: 200, y: 90, boxShadow:"0px 0px 20px 20px rgba(0, 160, 49, 0.16)", borderRadius: "50%"});
