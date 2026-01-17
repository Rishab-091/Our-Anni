/* LOADER */
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* MUSIC SYSTEM */
const tracks = [
  "music/if-we-have-each-other.mp3",
  "music/until-i-found-you.mp3",
  "music/photograph.mp3"
];

let current = 0;
const audio = new Audio(tracks[current]);
audio.volume = 0.6;

audio.addEventListener("ended", () => {
  current = (current + 1) % tracks.length;
  audio.src = tracks[current];
  audio.play();
});

document.getElementById("musicBtn").onclick = () => {
  audio.paused ? audio.play() : audio.pause();
};

/* PARTICLE BACKGROUND */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: Math.random() - 0.5,
  dy: Math.random() - 0.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
