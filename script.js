const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const angleStep = 360 / totalSlides; // Angle between slides

// Dynamically calculate size and spacing
const calculateSizeAndSpacing = () => {
  const sliderWidth = sliderInner.clientWidth;
  const sliderHeight = sliderInner.clientHeight;
  const maxDim = Math.min(sliderWidth, sliderHeight);
  const size = maxDim * 0.3; // Size of the images (30% of the smallest dimension)
  const spacing = maxDim * 0.1; // Gap between images (10% of the smallest dimension)

  return { size, spacing };
};

const { size, spacing } = calculateSizeAndSpacing();
const radius = size / 2 / Math.tan(Math.PI / totalSlides); // Calculate radius based on image size

function positionSlides() {
  slides.forEach((slide, index) => {
    const angle = angleStep * index;
    slide.style.width = `${size}px`;
    slide.style.height = `${size}px`;
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
setInterval(rotateSlider, 1000);

// Adjust size and spacing when the window is resized
window.addEventListener("resize", () => {
  const { size, spacing } = calculateSizeAndSpacing();
  positionSlides();
});
