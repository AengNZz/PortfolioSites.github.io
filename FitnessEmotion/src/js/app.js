/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper, { Navigation, Autoplay, EffectCoverflow } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

//swiper
const introSwiper = new Swiper('.intro__swiper', {
  modules: [Navigation, Autoplay, EffectCoverflow],

  direction: 'horizontal',
  allowTouchMove: false,
  centeredSlides: true,
  loop: true,

  effect: "coverflow",

  navigation: {
    nextEl: '.intro__swiper-button-prev',
    prevEl: '.intro__swiper-button-next',
  },

  breakpoints: {
    0: {
      allowTouchMove: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
    },

    430: {
      allowTouchMove: true,
    },

    768: {
      allowTouchMove: false,
      slidesPerView: 1,
    }
  }
});

/* new Accordion('.accordion', {
  shouldOpenAll: false, // true
   defaultOpen: [], // [0,1]
   collapsedClass: 'open',
}); */

//anchorLink
document.querySelectorAll('a.yakor').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 50;
    const elementPos = scrollTarget.
      getBoundingClientRect().top
    const offsetPos = elementPos - topOffset;

    window.scrollBy({
      top: offsetPos,
      behavior: 'smooth',
    })
  })
});

//closing an element
const close = document.querySelector('[data-close]');
const closeBtn = document.querySelector('[data-close-btn]');

closeBtn.addEventListener('click', () => {
  close.classList.remove("active");
});

//открытие dropDown меню
const dropDownOpener = document.querySelectorAll('[data-dropdown-opener]');

dropDownOpener.forEach((button) => {

  //открытие dropDown меню
  button.addEventListener('click', dropDown);

  function dropDown() {
    if (!button.classList.contains('active')) {
      dropDownOpener.forEach((button) => {
        button.classList.remove('active');
      });
    }

    event._isClick = true;
    button.classList.toggle('active');
  }

  document.body.addEventListener('click', function (event) {
    event._isClick == true ? false : button.classList.remove('active');
  });
})

//Смена языка
const langActive = document.querySelectorAll('[data-lang-active]');
const lang = document.querySelectorAll('[data-lang]');

lang.forEach((button) => {

  //Смена языка
  button.addEventListener('click', selectLang)

  function selectLang() {
    let attrValueActive;
    let attrValue;

    attrValue = button.getAttribute('data-lang');

    langActive.forEach((langActive) => {
      attrValueActive = langActive.getAttribute('data-lang-active');
      langActive.textContent = attrValue;
    })
  }
})