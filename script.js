// Carousel functionality (auto-slide images)
let currentSlide = 0;
const carouselImages = document.querySelectorAll('.carousel-image');

function showNextSlide() {
  carouselImages[currentSlide].style.display = 'none'; // Hide the current image
  currentSlide = (currentSlide + 1) % carouselImages.length; // Move to next slide
  carouselImages[currentSlide].style.display = 'block'; // Show the next image
}

// Start the carousel (every 3 seconds)
setInterval(showNextSlide, 3000);

// Show the first image by default
carouselImages.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
});

// Change CTA button text on click
document.getElementById('ctaButton').addEventListener('click', function() {
  this.textContent = 'Thank You! We will Contact You Soon!';
  this.style.backgroundColor = '#16a085';
  this.disabled = true; // Disable the button after click
});
