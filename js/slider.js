const imgDb = [
  'img/slide1.png',
  'img/slide2.png',
]


class Slider {
  constructor(elem, slides) {
    this.element = elem;
    this.slides = slides;
    this.current = 0;
    this.box = elem.querySelector(".slider__slide");
    this.box.style.backgroundImage = `url('${this.slides[0]}')`;
    this.element.style.backgroundImage = `url('${this.slides[0]}')`;
    this.prevBtn = elem.querySelector(".slider__button_prev");
    this.nextBtn = elem.querySelector(".slider__button_next");
    this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
    this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
    window.addEventListener('resize', this.checkSizes.bind(this));
    this.checkSizes();
  }

  checkSizes() {
    const sliderWidth = 1248;
    if (window.innerWidth < sliderWidth) {
      this.clearTimeout();
      this.element.style.display = 'none';
    }
    else {
      this.element.style.display = '';
      this.autoroll();
    }
  }

  autoroll() {
    this.clearTimeout();
    this.timeout = setTimeout(() => this.nextSlide(), 4000);
  }

  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  prevSlide() {
    const prev = this.current === 0 ? this.slides.length - 1 : this.current - 1;
    this.slide(prev);
    this.current = prev;
  }

  nextSlide() {
    const next = this.current === this.slides.length - 1 ? 0 : this.current + 1;
    this.slide(next);
    this.current = next;
  }

  slide(next) {
    this.element.style.backgroundImage = `url(${this.slides[next]})`;
    this.box.animate(
      [
        {
          opacity: 1
        },
        {
          opacity: 0
        }
      ],
      {
        duration: 400,
        fill: "forwards"
      }
    );
    setTimeout(() => { this.box.style.backgroundImage = `url(${this.slides[next]})`; }, 400);
    this.autoroll();
  }
}

const slider = new Slider(document.getElementById("fadeSlider"), imgDb);