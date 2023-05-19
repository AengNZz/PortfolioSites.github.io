document.querySelectorAll('.container').forEach((n) => {
  const slider = new Swiper(n.querySelector('.product-slider'), {
    navigation: {
      nextEl: n.querySelector('.swiper-button-next'),
      prevEl: n.querySelector('.swiper-button-prev'),
    },
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const thumbs = new Swiper(n.querySelector('.product-thumbs'), {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
});
