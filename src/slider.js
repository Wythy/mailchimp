import Swiper, { Navigation, Pagination } from 'swiper/core/';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});