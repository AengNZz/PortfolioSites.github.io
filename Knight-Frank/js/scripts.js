//-----------------accordion
document.querySelectorAll('.accordion__item-trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion__item--active')) {
      parent.classList.remove('accordion__item--active');
    } else {
      document.querySelectorAll('.accordion__item').forEach((child) => {
        child.classList.remove('accordion__item--active');
      });

      parent.classList.add('accordion__item--active');
    }
  })
);

//-----------------modal
const modal = document.querySelector('.leave-contacts-modal__wrapper');
const modalButton = document.querySelectorAll('.modal-call');
const modalButtonClose = document.querySelector('.leave-contacts-modal__button');

modalButton.forEach(function (itemButton) {
  itemButton.addEventListener('click', () => {
    modal.classList.add('leave-contacts-modal__wrapper--active');
  });
});

//-----------------tabs
const tabsButton = document.querySelectorAll('.our-offers__box-tab-item');
const tabsItems = document.querySelectorAll('.our-offers__content');

tabsButton.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let currentSlider = item;
    let tabId = currentBtn.getAttribute('data-offers');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('our-offers__box-tab-item-active')) {
      tabsButton.forEach(function (item) {
        item.classList.remove('our-offers__box-tab-item-active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('our-offers__content--active');
      });
    }

    currentBtn.classList.add('our-offers__box-tab-item-active');
    currentTab.classList.add('our-offers__content--active');
  });
});

//-----------------select-form
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownButton = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownItem = dropDownList.querySelectorAll('.dropdown__item');
  const dropDownHidden = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownButton.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--active');
    this.classList.add('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {
      event.stopPropagation();
      dropDownList.classList.remove('dropdown__list--active');
      dropDownButton.classList.add('dropdown__button--color');
      dropDownButton.innerText = this.innerText;
      dropDownHidden.value = this.dataset.value;
      dropDownButton.focus();
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (event) {
    if (event.target !== dropDownButton) {
      dropDownList.classList.remove('dropdown__list--active');
      dropDownButton.classList.remove('dropdown__button--active');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      dropDownList.classList.remove('dropdown__list--active');
      dropDownButton.classList.remove('dropdown__button--active');
      dropDownButton.blur();
    }
  });
});
