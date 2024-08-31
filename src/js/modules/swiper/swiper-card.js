import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import 'swiper/css';

const swiperModal = new Swiper('.mcascad', {
  modules: [Navigation],

  speed: 1000,
  grabCursor: true,

  slidesPerView: 4,
  spaceBetween: 78,

  navigation: {
    prevEl: document.querySelector('.mcascad .swiper-button-prev'),
    nextEl: document.querySelector('.mcascad .swiper-button-next'),
  },

  breakpoints: {
    1305: {
      slidesPerView: 4,
      // slidesPerGroup: 4,
    },
    932: {
      slidesPerView: 3,
      // slidesPerGroup: 3,
    },
    621: {
      slidesPerView: 2,
      // slidesPerGroup: 2,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // loop: true,
    },
  },
});

const swiperSimilar = new Swiper('.similar .swiper', {
  modules: [Navigation],

  speed: 1000,
  grabCursor: true,

  slidesPerView: 4,
  slidesPerGroup: 2,
  spaceBetween: 32,

  navigation: {
    prevEl: document.querySelector('.similar .swiper-button-prev'),
    nextEl: document.querySelector('.similar .swiper-button-next'),
  },

  breakpoints: {
    1305: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
    932: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    737: { slidesPerView: 2, spaceBetween: 32 },
    501: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },
});
