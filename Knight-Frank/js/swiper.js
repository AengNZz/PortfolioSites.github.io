document.querySelectorAll('.container-V2').forEach((n) => {
  const slider = new Swiper(n.querySelector('.product-slider'), {
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 62,
    slidesPerView: 2,
    slidesPerGroup: 2,
    speed: 600,
    centerSlidesBounds: true,
    centerInsufficientSlides: true,
    centerSlides: true,
  });

  const thumbs = new Swiper(n.querySelector('.product-thumbs'), {
    spaceBetween: 62,
    slidesPerView: 2,
    slidesPerGroup: 2,
    speed: 600,
    centerSlidesBounds: true,
    centerInsufficientSlides: true,
    centerSlides: true,
    direction: 'horizontal',
  });

  const third = new Swiper(n.querySelector('.product-third'), {
    spaceBetween: 70,
    slidesPerView: 1,
    speed: 600,
    centerSlidesBounds: true,
    centerInsufficientSlides: true,
    centerSlides: true,
    freeMode: false,
    direction: 'horizontal',
  });

  const fifth = new Swiper(n.querySelector('.product-fifth'), {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    speed: 600,
    centerSlidesBounds: true,
    centerInsufficientSlides: true,
    centerSlides: true,
    freeMode: false,
    direction: 'horizontal',
  });

  fifth.controller.control = fifth;
  third.controller.control = third;
  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
});

document.querySelectorAll('.container').forEach((n) => {
  const fifth = new Swiper(n.querySelector('.product-fifth'), {
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    slidesPerView: 1,
    centerSlidesBounds: true,
    centerInsufficientSlides: true,
    centerSlides: true,
    freeMode: false,
    allowTouchMove: false,
    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  fifth.controller.control = fifth;
});

document.querySelectorAll('.our-offers__content').forEach((n) => {
  const fourth = new Swiper(n.querySelector('.fourth-slider'), {
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerGroup: 2,
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: 'auto',
    speed: 600,
  });

  fourth.controller.control = fourth;
});
