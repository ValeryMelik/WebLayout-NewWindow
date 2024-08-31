import JustValidate from 'just-validate';

import { checkAgreement, validationCheck } from './validation.js';

const validationContacts = new JustValidate('.contacts__form', {
  validateBeforeSubmitting: true,
  focusInvalidField: false,
});

const inputArr = document.querySelectorAll('.contacts__input');

checkAgreement('.contacts');

validationCheck(inputArr);

validationContacts
  .addField('#contacts-name', [
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
  .addField('#contacts-phone', [
    {
      rule: 'customRegexp',
      value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gi,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      errorMessage: '*обязательное поле',
    },
  ])
  .addField('#contacts-email', [
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      errorMessage: '*обязательное поле',
    },
  ]);
