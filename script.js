const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const angleStep = 360 / totalSlides;
const radius = 300; // Distance from the center to the slides

function positionSlides() {
  slides.forEach((slide, index) => {
    const angle = angleStep * index;
    slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });
}

let rotationAngle = 0;

function rotateSlider() {
  rotationAngle += angleStep; // Adjust the angle for each slide
  sliderInner.style.transform = `rotateY(${rotationAngle}deg)`;
}

// Initialize slide positions
positionSlides();

// Rotate every 3 seconds
setInterval(rotateSlider, 3000);
