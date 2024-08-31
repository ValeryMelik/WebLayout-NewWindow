import Choices from 'choices.js';

const element = document.querySelector('.u-block__region select');
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',
});
