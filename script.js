const playlist = [
    "if-we-have-each-other.mp3",
    "until-i-found-you.mp3",
    "photograph.mp3"
];

let currentTrack = 0;
const audio = new Audio(playlist[currentTrack]);
audio.volume = 0.8;

audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack];
    audio.play();
});

function startMusic() {
    audio.play();
}
