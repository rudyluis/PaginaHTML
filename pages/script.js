let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * slides[0].clientWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();