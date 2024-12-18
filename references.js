const slider = document.querySelector('.references-slider');
let isPaused = false;

slider.addEventListener('mouseover', () => {
    isPaused = true;
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    isPaused = false;
    slider.style.animationPlayState = 'running';
});