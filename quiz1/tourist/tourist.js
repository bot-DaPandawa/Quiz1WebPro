let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    let hiddenIndex = (currentIndex + 2) % totalSlides;

    slides[hiddenIndex].style.transition = 'none';
    
    if (direction === 1) {
        slides[hiddenIndex].className = 'slide hidden-right';
    } else { 
        slides[hiddenIndex].className = 'slide hidden-left';
    }

    void slides[hiddenIndex].offsetWidth;

    slides[hiddenIndex].style.transition = '';

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    
    renderCarousel(direction);
}

function renderCarousel(direction = 1) {
    let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    let nextIndex = (currentIndex + 1) % totalSlides;

    slides.forEach((slide, i) => {
        slide.className = 'slide';
        
        if (i === currentIndex) slide.classList.add('active');
        else if (i === prevIndex) slide.classList.add('prev');
        else if (i === nextIndex) slide.classList.add('next');
        else {
            if (direction === 1) slide.classList.add('hidden-left');
            else slide.classList.add('hidden-right');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    slides.forEach(slide => slide.style.transition = 'none');
    renderCarousel(1);
    
    setTimeout(() => {
        slides.forEach(slide => slide.style.transition = '');
    }, 50);
});