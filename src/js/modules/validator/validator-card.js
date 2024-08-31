import JustValidate from 'just-validate';

import { checkAgreement, validationCheck } from './validation.js';

const validationModal = new JustValidate('.modal__mform', {
  validateBeforeSubmitting: true,
  focusInvalidField: false,
});

const inputArr = document.querySelectorAll('.mform__input');

checkAgreement('.mform');

validationCheck(inputArr);

validationModal
  .addField('#modal-name', [
    {
      rule: 'customRegexp',
      value: /^[a-zа-яёË]+$/gi,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      errorMessage: '*обязательное поле',
    },
  ])
  .addField('#modal-phone', [
    {
      rule: 'customRegexp',
      value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gi,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      errorMessage: '*обязательное поле',
    },
  ]);
