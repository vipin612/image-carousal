// Create a new script element
var script = document.createElement('script');

// Set the src attribute to the Bootstrap CDN URL
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";




// Set the crossorigin attribute (optional)
script.crossOrigin = "anonymous";

// Append the script element to the body
document.body.appendChild(script);

let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalSlides = carouselItems.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}


