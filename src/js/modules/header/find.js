const input = document.querySelector('.header .d-block__find input');
const btn = document.querySelector('.header .d-block__find button');
const svg = document.querySelector('.header .d-block__find svg');

input.addEventListener('focus', () => {
  if (!input.value) disable();
});

input.addEventListener('blur', () => {
  disable(false);
});

input.addEventListener('input', () => {
  disable(!input.value);

  input.classList.toggle('reset-input', input.value);
  svg.classList.toggle('search_active', input.value);
});

btn.addEventListener('click', () => {
  if (!input.value) {
    disable();
    return;
  }
  alert(
    `По запросу "${input.value}" ничего не найдено (и даже не искалось...) `
  );
  input.value = '';
});

function disable(condition = true) {
  btn.disabled = condition;
}
