const slides = [
  './img/slide1.png',
  './img/slide2.png',
]

const sliderWidth = 1248;

const slider = document.querySelector('.slider__slide');
const prev = document.querySelector('.slider__nav_prev');
const next = document.querySelector('.slider__nav_next');

let current = 0;
let timeout = null;
slider.style.backgroundImage = `url('${slides[0]}')`;
checkSizes();

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
window.addEventListener('resize', checkSizes);

function prevSlide() {
  const newSlide = current === 0 ? slides.length - 1 : current - 1;
  setSlide(newSlide);
}

function nextSlide() {
  const newSlide = current === slides.length - 1 ? 0 : current + 1;
  setSlide(newSlide);
}

function setSlide(newSlide) {
  slider.classList.add('slider__slide_fade');
  setTimeout(() => {
    slider.classList.remove('slider__slide_fade');
    current = newSlide;
    slider.style.backgroundImage = `url('${slides[current]}')`;
  }, 1000);
  prepareNext();
}

function checkSizes() {
  if (window.innerWidth < sliderWidth) {
    slider.style.display = 'none';
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
  else {
    slider.style.display = 'block';
    prepareNext();
  }
}

function prepareNext() {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(nextSlide, 5000);
}