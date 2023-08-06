import Swiper from 'swiper/bundle';

import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper('.image_slider');
// new Swiper('.image_slider');
// const mySwiper = new Swiper('image_slider', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
const mySwiper = new Swiper('swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 300,
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

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// , {
// Вывод стрелок навигации
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// Инициализация превью слайдера
// const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
// ищем слайдер превью по селектору
// задаем параметры
// direction: 'vertical', // вертикальная прокрутка
// slidesPerView: 3, // показывать по 3 превью
// spaceBetween: 24, // расстояние между слайдами
// navigation: {
// задаем кнопки навигации
//   nextEl: '.slider__next', // кнопка Next
//   prevEl: '.slider__prev', // кнопка Prev
// },
// freeMode: true, // при перетаскивании превью ведет себя как при скролле
// breakpoints: {
// условия для разных размеров окна браузера
// 0: {
// при 0px и выше
//   direction: 'horizontal', // горизонтальная прокрутка
// },
// 768: {
// при 768px и выше
//       direction: 'vertical', // вертикальная прокрутка
//     },
//   },
// });
// Инициализация слайдера изображений
// const sliderImages = new Swiper('.slider__images .swiper-container', {
// ищем слайдер превью по селектору
// задаем параметры
// direction: 'vertical', // вертикальная прокрутка
// slidesPerView: 1, // показывать по 1 изображению
// spaceBetween: 32, // расстояние между слайдами
// mousewheel: true, // можно прокручивать изображения колёсиком мыши
// navigation: {
// задаем кнопки навигации
//   nextEl: '.slider__next', // кнопка Next
//   prevEl: '.slider__prev', // кнопка Prev
// },
// grabCursor: true, // менять иконку курсора
// thumbs: {
// указываем на превью слайдер
//     swiper: sliderThumbs, // указываем имя превью слайдера
//   },
//   breakpoints: {
//     // условия для разных размеров окна браузера
//     0: {
//       // при 0px и выше
//       direction: 'horizontal', // горизонтальная прокрутка
//     },
//     768: {
//       // при 768px и выше
//       direction: 'vertical', // вертикальная прокрутка
//     },
//   },
// });
