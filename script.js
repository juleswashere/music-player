

const audioPlayer = document.querySelector("#song");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const skip = document.querySelector(".skip");
const back = document.querySelector(".back");
const progress = document.querySelector("#progress");
const ctrlIcon = document.querySelector("#ctrlIcon");
const img = document.querySelector(".img")

ctrlIcon.addEventListener('click', () => {
    if(audioPlayer.paused) {
        audioPlayer.play();
        ctrlIcon.innerHTML = '<i class="fa-solid fa-pause" id="pauseBtn"></i>';
    } else {
        audioPlayer.pause();
        ctrlIcon.innerHTML = '<i class="fa-solid fa-play" id="playBtn"></i>';
    }
});
const setSongs = (i) => {
    progress.value = 0;
    const music = songs[i];
    currentSong = i;
    audioPlayer.src = music.file;

    title.innerHTML = music.title;
    artist.innerHTML = music.artist;
    img.src = music.img;
}
setSongs(currentSong);

skip.addEventListener('click', () => {
    if(currentSong >= songs.length - 1){
        currentSong = 0;
    } else{
        currentSong++;
    }
    setSongs(currentSong);
})

back.addEventListener('click', () => {
    if(currentSong <= 0){
        currentSong = songs.length - 1;
    } else{
        currentSong--;
    }
    setSongs(currentSong);

})
audioPlayer.onloadedmetadata = function(){
    progress.max = audioPlayer.duration;
    progress.value = audioPlayer.currentTime;
}
setInterval(()=>{
    progress.value = audioPlayer.currentTime;
},500);
progress.onchange = function(){
    audioPlayer.play();
    audioPlayer.currentTime = progress.value;
    ctrlIcon.innerHTML = '<i class="fa-solid fa-pause" id="pauseBtn"></i>';
}
