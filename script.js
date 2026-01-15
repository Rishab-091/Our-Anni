// God-tier JS with all interactions, particles, quiz, game, weather, VR, poem, etc.
const anniversaryDate = new Date('2024-10-01');
let countdownInterval, particleInterval, heartInterval, gameScore = 0;

// Particle system
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(particle);
    }
}

// Floating hearts
function createHearts() {
    const container = document.getElementById('floating-hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
    setTimeout(() => { container.innerHTML = ''; }, 10000);
}

// Weather API (mock)
function fetchWeather() {
    // Simulate API call
    document.getElementById('weather').innerHTML = 'Sunny, 25°C - Perfect for love!';
}

// Countdown
function updateCountdown() {
    const now = new Date();
    const timeDiff = anniversaryDate - now;
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerHTML = `Next anniversary in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').innerHTML = "Happy Anniversary! 🎉";
        clearInterval(countdownInterval);
    }
}

// Quiz
function handleQuiz(answer) {
    document.getElementById('quiz-result').innerHTML = answer === 'red' ? 'Perfect match!' : 'Still compatible!';
}
document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleQuiz(btn.dataset.answer));
});

// Mini game
function startGame() {
    const area = document.getElementById('game-area');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-click';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 250 + 'px';
        heart.style.top = Math.random() * 250 + 'px';
