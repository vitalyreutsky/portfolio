// Подключение свайпера
import Swiper, {
  Autoplay,
  EffectFade,
  EffectFlip,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper";
Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,
  EffectFade,
  Keyboard,
]);
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  //effect: "flip",
  //effect: "fade",
  //fadeEffect: {
  //  crossFade: true,
  //},
  autoHeight: true,
  freeMode: true,
  loop: true,
  //autoplay: {
  //  delay: 3000,
  //  disableOnInteraction: false,
  //},
  speed: 1500,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
