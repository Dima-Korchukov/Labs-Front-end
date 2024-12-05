document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});

const playButton = document.getElementById('play-button');
const video = document.getElementById('background-video');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.style.display = 'block'; // Показуємо відео
        video.play();
        playButton.style.display = 'none'; // Приховуємо кнопку після запуску
    }
});
