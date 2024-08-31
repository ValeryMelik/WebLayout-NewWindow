import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import 'swiper/css';

const swiperCatalog1 = new Swiper('.market .catalog_big', {
  modules: [Pagination],

  speed: 1000,

  slidesPerGroup: 1,
  spaceBetween: 32,

  pagination: {
    el: '.market .catalog_big .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const swiperCatalog2 = new Swiper('.market .catalog_small', {
  modules: [Pagination],

  speed: 1000,

  slidesPerGroup: 1,
  spaceBetween: 32,

  pagination: {
    el: '.market .catalog_small .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
