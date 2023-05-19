"use strict";

const swiper = new Swiper(".swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
