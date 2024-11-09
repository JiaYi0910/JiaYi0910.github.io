const songs = [
    { title: "HUR-有毒不回", src: "music/有毒不回.mp3" },
    { title: "(G)i-dle-i'M THE TREND", src: "music/i'M THE TREND.mp3" },
    { title: "YOASOBI-夜に駆ける", src: "music/夜に駆ける.mp3" },
    { title: "Lady Gaga - Bad Romance", src: "music/Bad Romance.mp3" }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");

function playRandomSong() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);

    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
}

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
}

function prevSong() {
    playRandomSong();
}

function nextSong() {
    playRandomSong();
}

audioPlayer.addEventListener("ended", playRandomSong);
playRandomSong();