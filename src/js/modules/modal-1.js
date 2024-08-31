const modal = document.getElementById('modal-1');
const window = modal.querySelector('.modal__window');
const closer = modal.querySelector('.modal__closer');

window.addEventListener('click', (event) => {
  event._isModalClick = true;
});

window.addEventListener('submit', (event) => {
  event.preventDefault();

  alert('Успешно!');
});

closer.addEventListener('click', (event) => {
  toggleModalWindow(event, false);
});

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', toggleModalWindow);
});

document.addEventListener('click', (event) => {
  if (!event._isModalClick) toggleModalWindow(event, false);
});

function toggleModalWindow(event, show = true) {
  event._isModalClick = show;

  modal.classList.toggle('unvisible', !show);
  window.classList.toggle('modal__window_active', show);
  document.body.classList.toggle('stop-scroll', show);
}
