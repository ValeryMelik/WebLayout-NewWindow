const modal = document.querySelector('.modal');

const mformWindow = document.querySelector('.modal__mform');
const filling = document.querySelector('.modal .mform__filling');

const buyBtn = document.querySelector('.crinfo__btn');
const closeFormBtn = document.querySelector('.modal .mform__close');
const confirmBtn = document.querySelector('.modal .mform__btn');

const inputArr = document.querySelectorAll('.modal .mform__input');

const MODAL_ACTIVE_CLS = 'modal_active';
const MODAL_SHOW_CLS = 'modal_show';
const FILLING_ACTIVE_CLS = 'mform__filling_active';
const FORM_SHOT_CLS = 'modal__mform_short';

const ERR_LABEL = 'just-validate-error-label';
const SUC_LABEL = 'just-validate-success-field';

const imgWindow = document.querySelector('.modal__mimg');
const closeImgBtn = document.querySelector('.mimg__close');
const openImg = document.querySelector('.card__crimg');

buyBtn.addEventListener('click', () => {
  modal.classList.add(MODAL_ACTIVE_CLS, MODAL_SHOW_CLS);
  imgWindow.classList.add('off');
});

closeFormBtn.addEventListener('click', () => {
  modal.classList.remove(MODAL_SHOW_CLS);

  setTimeout(() => {
    modal.classList.remove(MODAL_ACTIVE_CLS);

    inputArr.forEach((el) => {
      el.value = '';
      el.classList.add('reset-input');

      const labelErr = el.parentNode.querySelector('.' + ERR_LABEL);
      if (labelErr) labelErr.classList.add('unvisible');

      const fieldSuc = el.parentNode.querySelector('.' + SUC_LABEL);
      if (fieldSuc) fieldSuc.classList.remove(SUC_LABEL);
    });

    filling.classList.remove(FILLING_ACTIVE_CLS);

    mformWindow.classList.remove(FORM_SHOT_CLS);
    imgWindow.classList.remove('off');
  }, 300);
});

confirmBtn.addEventListener('click', () => {
  const checkSuccess = (inp) =>
    inp.parentNode.querySelector('.' + SUC_LABEL) !== null;

  if (Array.prototype.every.call(inputArr, checkSuccess)) {
    filling.classList.add(FILLING_ACTIVE_CLS);

    if (matchMedia('(max-width: 500px)').matches)
      mformWindow.classList.add(FORM_SHOT_CLS);
  }
});

openImg.addEventListener('click', () => {
  modal.classList.add(MODAL_ACTIVE_CLS, MODAL_SHOW_CLS);
  mformWindow.classList.add('off');
});

closeImgBtn.addEventListener('click', () => {
  modal.classList.remove(MODAL_SHOW_CLS);

  setTimeout(() => {
    modal.classList.remove(MODAL_ACTIVE_CLS);

    mformWindow.classList.remove('off');
  }, 300);
});
