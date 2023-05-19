document.querySelectorAll('.container').forEach((n) => {
  const slider = new Swiper(n.querySelector('.product-slider'), {
    navigation: {
      nextEl: n.querySelector('.swiper-button-next'),
      prevEl: n.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: '.swiper-pagination',
    },
    allowTouchMove:false,
  });

  const thumbs = new Swiper(n.querySelector('.product-thumbs'), {
    spaceBetween: 20,
    slidesPerView: "auto",  
    allowTouchMove:false,
    direction: 'horizontal',  
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
});
