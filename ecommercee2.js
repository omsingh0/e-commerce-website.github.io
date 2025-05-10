function closeWindow() {
    window.close();
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images > *');
    const totalSlides = slides.length;

    // Calculate the new slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Update the transform property to show the correct slide
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Pause any playing video when the slide changes
    slides.forEach((slide, index) => {
        if (slide.tagName === 'VIDEO' && index !== currentSlide) {
            slide.pause();
        }
    });
}
function abc(){
    alert("item added into cart");
}
