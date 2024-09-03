const nameInputBlock = document.getElementById('name').parentElement;
const nameInput = nameInputBlock.querySelector('input');
const phoneInputBlock = document.getElementById('number').parentElement;
const phoneInput = phoneInputBlock.querySelector('input');
const submitButton = document.querySelector('button[type="submit"]');

let nameTimeout, phoneTimeout;

submitButton.disabled = true;

function validateName(check = false) {
  const name = nameInput.value.trim();
  const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s'-]{2,}$/;

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

function maskPhone() {
  let value = phoneInput.value.replace(/\D/g, '');
  value = value.slice(0, 11);

  let formattedValue = '';

  if (value.length > 0) {
    formattedValue = '+7 (';
  }
  if (value.length > 1) {
    formattedValue += value.substring(1, 4);
  }
  if (value.length >= 5) {
    formattedValue += ') ' + value.substring(4, 7);
  }
  if (value.length >= 8) {
    formattedValue += '-' + value.substring(7, 9);
  }
  if (value.length >= 10) {
    formattedValue += '-' + value.substring(9, 11);
  }

  phoneInput.value = formattedValue;
}

// Функция для форматирования имени
function formatName() {
  let value = nameInput.value.trim();
  if (value.length > 0) {
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  nameInput.value = value;
}

// Обработка изменения в поле имени
nameInput.addEventListener('input', () => {
  formatName();
  toggleSubmitButton();

  clearTimeout(nameTimeout);
  nameTimeout = setTimeout(validateName, 500);
});

// Обработка изменения в поле телефона
phoneInput.addEventListener('input', () => {
  maskPhone();
  toggleSubmitButton();

  clearTimeout(phoneTimeout);
  phoneTimeout = setTimeout(validatePhone, 500);
});

function toggleSubmitButton() {
  submitButton.disabled = validateName(true) || validatePhone(true);
}
