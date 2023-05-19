let lastScroll = 0;
const defaultOffset = 30;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});

const tabsBtn = document.querySelectorAll('.news__button');
const tabsItems = document.querySelectorAll('.news__box');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-news');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('news__button--active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('news__button--active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('news__box--active');
      });
    }

    currentBtn.classList.add('news__button--active');
    currentTab.classList.add('news__box--active');
  });
});

document.querySelector('.news__button').click();
