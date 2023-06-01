const carouselContainer = document.querySelector('.carousel-container');
const photoContainers = Array.from(
  document.querySelectorAll('.photo-container')
);
const photoWidth = photoContainers[0].offsetWidth;

let currentIndex = 0;

function moveCarousel() {
  const position = -currentIndex * photoWidth;
  carouselContainer.style.transform = `translateX(${position}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= photoContainers.length) {
    currentIndex = 0;
  }
  moveCarousel();
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = photoContainers.length - 1;
  }
  moveCarousel();
}

setInterval(nextSlide, 3000); // Auto-advance to the next slide every 3 seconds
