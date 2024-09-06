import Inputmask from 'inputmask/lib/inputmask.js';

const nameInputBlock = document.getElementById('name').parentElement;
const nameInput = nameInputBlock.querySelector('input');

const submitButton = document.querySelector('button[type="submit"]');

let nameTimeout, phoneTimeout;

submitButton.disabled = true;

function validateName(check = false) {
  const name = nameInput.value.trim();
  const namePattern = /^[A-ZА-ЯЁ][a-zа-яё]*([ '-][A-ZА-ЯЁ][a-zа-яё]*)*$/;

  const checkRes = name === '' || !namePattern.test(name);

  if (check) return checkRes;

  if (checkRes) {
    nameInputBlock.classList.remove('form__labinp_success');
    nameInputBlock.classList.add('form__labinp_error');
  } else {
    nameInputBlock.classList.add('form__labinp_success');
    nameInputBlock.classList.remove('form__labinp_error');
  }
}

function formatName() {
  let value = nameInput.value;
  if (value.length > 0) {
    value = value
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  nameInput.value = value;
}

nameInput.addEventListener('input', () => {
  formatName();
  toggleSubmitButton();

  clearTimeout(nameTimeout);
  nameTimeout = setTimeout(validateName, 500);
});

const phoneInputBlock = document.getElementById('number').parentElement;
const phoneInput = phoneInputBlock.querySelector('input');

function validatePhone(check = false) {
  const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const checkRes =
    phoneInput.value === '' || !phonePattern.test(phoneInput.value);

  if (check) return checkRes;

  if (checkRes) {
    phoneInputBlock.classList.remove('form__labinp_success');
    phoneInputBlock.classList.add('form__labinp_error');
  } else {
    phoneInputBlock.classList.add('form__labinp_success');
    phoneInputBlock.classList.remove('form__labinp_error');
  }
}

Inputmask({
  mask: '+7 (999) 999-99-99',
  showMaskOnFocus: true, 
  showMaskOnHover: false, 
  clearMaskOnLostFocus: false, 
  placeholder: '_', 
}).mask(phoneInput);

phoneInput.addEventListener('input', () => {
  toggleSubmitButton();

  clearTimeout(phoneTimeout);
  phoneTimeout = setTimeout(validatePhone, 500);
});

function toggleSubmitButton() {
  submitButton.disabled = validateName(true) || validatePhone(true);
}
