let currentSong = 0;

const song = document.querySelector("#song");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const skip = document.querySelector(".skip");
const back = document.querySelector(".back");
const progress = document.querySelector("#progress");
const ctrlIcon = document.querySelector("#ctrlIcon");
const img = document.querySelector(".img")
const lyrics = document.querySelector(".lyrics");

ctrlIcon.addEventListener('click', () => {
    if(song.paused) {
        song.play(); 
        ctrlIcon.innerHTML = '<i class="fa-solid fa-pause" id="pauseBtn"></i>';
    } else {
        song.pause();
        ctrlIcon.innerHTML = '<i class="fa-solid fa-play" id="playBtn"></i>';
    }
    updatePlayButton();
});
const setSongs = (i) => {
    progress.value = 0;
    let music = songs[i];
    currentMusic = i;
    song.src = music.file;

    title.innerHTML = music.title;
    artist.innerHTML = music.artist;
    lyrics.innerHTML = music.lyrics;
    img.src = music.img;
}
setSongs(0);

skip.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setSongs(currentMusic);
})

back.addEventListener('click', () => {
    if(currentSong <= 0){
        currentSong = songs.length - 1;
    } else{
        currentSong--;
    }
    setSongs(currentSong);

})
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.innerHTML = '<i class="fa-solid fa-pause" id="pauseBtn"></i>';
}
