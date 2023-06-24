const accordeonBtn = document.querySelectorAll('.faq__accordeons-button');

accordeonBtn.forEach((accordeon) => {
    accordeon.addEventListener('click', function () {
        accordeon.classList.toggle('faq__accordeons-button-active');

        const item = accordeon.nextElementSibling;
        if (accordeon.classList.contains('faq__accordeons-button-active')) {
            item.style.height = `${item.scrollHeight + 34}px`;
            item.style.opacity = 1;
        } else {
            item.removeAttribute('style');
        }
    });
});

const modal = document.getElementById('application-modal');
const modalBox = document.getElementsByClassName('application-modal__box')[0];
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.getElementsByClassName('close-modal')[0];

openModal.forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.top = -100 + 'px';
        modalBox.style.transform = 'translate(-50%, 364px)';
        modal.classList.add('application-modal__open');
    });
});

closeModal.onclick = function () {
    modal.classList.remove('application-modal__open');
    modalBox.style.transform = 'translate(-50%, -1000px)';
    setTimeout(() => {
        modal.style.top = -5000 + 'px';
    }, 500);
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('application-modal__open');
        modalBox.style.transform = 'translate(-50%, -1000px)';
        setTimeout(() => {
            modal.style.top = -5000 + 'px';
        }, 500);
    }
};

//burger

const burgerBtn = document.querySelector('.burger-button');
const burger = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('burger__menu-open');
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let t of anchors)
    t.addEventListener('click', function (e) {
        e.preventDefault();
        const o = t.getAttribute('href').substr(1);
        document.getElementById(o).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });


const bankName = document.querySelector('.bank-name');
const slideActive = document.querySelector('.swiper-slide-active');

const idFreedomBank = document.getElementById('freedom-bank');
const idBakaiBank = document.getElementById('bakai-bank');
const idOptimaBank = document.getElementById('optima-bank');


