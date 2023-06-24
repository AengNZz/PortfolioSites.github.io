swiper.on('transitionEnd', function () {
  if (idFreedomBank.classList.contains('swiper-slide-active')) {
      bankName.innerHTML = 'Freedom Bank';
  } 

  if (idBakaiBank.classList.contains('swiper-slide-active')) {
      bankName.innerHTML = 'Bakai Bank';
  }

  if (idOptimaBank.classList.contains('swiper-slide-active')) {
      bankName.innerHTML = 'Optima Bank';
  }
});
