var video = document.getElementById('homepage-img');
var vid = document.getElementById('stop-play')
function myFunc(){
    if (video.paused){
        video.play();
        vid.innerHTML = "pause";
    }
    else{
        video.pause();
        vid.innerHTML = "play";
    }
    
}