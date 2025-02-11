const slides = [
  './img/slide1.png',
  './img/slide2.png',
]

const slide = document.querySelector('.slider');
const prev = document.querySelector('.slider__nav_prev');
const next = document.querySelector('.slider__nav_next');

let current = 0;
setSlide();

prev.addEventListener('click', () => {
  current = current === 0 ? slides.length - 1 : current - 1;
  setSlide();
});

next.addEventListener('click', () => {
  current = current === slides.length - 1 ? 0 : current + 1;
  setSlide();
});

function setSlide() {  
  slide.style.backgroundImage = `url('${slides[current]}')`;
}
