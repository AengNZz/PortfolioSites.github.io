const tabsBtn = document.querySelectorAll('.button-clinic');
const tabsItems = document.querySelectorAll('.tabs__content-item');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tabs');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('button-clinic--active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('button-clinic--active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('tabs__content-item--active');
      });
    }

    currentBtn.classList.add('button-clinic--active');
    currentTab.classList.add('tabs__content-item--active');
  });
});

document.querySelector('.button-clinic').click();
