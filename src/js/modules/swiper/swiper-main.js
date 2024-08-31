import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import 'swiper/css';

const swiperHero = new Swiper('.hero .swiper', {
  modules: [Pagination],

  speed: 1500,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,

  loop: true,

  grabCursor: true,

  pagination: {
    el: '.hero .swiper-pagination',
    type: 'bullets',
  },

  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  },
});

const swiperSpecial1 = new Swiper('.special__block-1 .swiper', {
  modules: [Navigation],

  slidesPerView: 1,

  speed: 1000,

  spaceBetween: 32,

  grabCursor: true,

  navigation: {
    prevEl: document.querySelector('.special__block-1 .swiper-button-prev'),
    nextEl: document.querySelector('.special__block-1 .swiper-button-next'),
  },
});

const swiperSpecial2 = new Swiper('.special .block-2 .swiper', {
  modules: [Navigation],

  slidesPerView: 1,

  // loop: true,

  speed: 1000,
  grabCursor: true,

  spaceBetween: 32,

  navigation: {
    prevEl: document.querySelector('.special .block-2 .swiper-button-prev'),
    nextEl: document.querySelector('.special .block-2 .swiper-button-next'),
  },
});

const swiperSpecial3 = new Swiper('.special .block-3 .swiper', {
  modules: [Navigation],

  slidesPerView: 1,
  // loop: true,

  speed: 1000,
  grabCursor: true,

  spaceBetween: 32,

  navigation: {
    prevEl: document.querySelector('.special .block-3 .swiper-button-prev'),
    nextEl: document.querySelector('.special .block-3 .swiper-button-next'),
  },
});

const swiperUseful = new Swiper('.useful .swiper', {
  modules: [Navigation],

  speed: 1000,
  grabCursor: true,

  slidesPerGroup: 1,
  spaceBetween: 32,

  navigation: {
    prevEl: document.querySelector('.useful .swiper-button-prev'),
    nextEl: document.querySelector('.useful .swiper-button-next'),
  },

  breakpoints: {
    1305: {
      slidesPerView: 2,
    },
    932: {
      slidesPerView: 3,
    },
    737: { slidesPerView: 2, spaceBetween: 32 },
    501: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    0: {
      // loop: true,
      slidesPerView: 1,
    },
  },
});
