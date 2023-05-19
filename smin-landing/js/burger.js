const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header__mobile-menu');
const noFocus = document.querySelectorAll('.--nofocus');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__mobile-menu--active');
});
