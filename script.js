const sliderInner = document.querySelector(".slider-inner");
let angle = 0;

function rotateSlider() {
  angle += 72; // Adjust the angle for each slide
  sliderInner.style.transform = `rotateY(${angle}deg)`;
}

// Rotate every 3 seconds
setInterval(rotateSlider, 3000);
