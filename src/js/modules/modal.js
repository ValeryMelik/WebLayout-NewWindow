const modal = document.getElementById('modal');

function toggleModal(fn) {
  modal.classList.toggle('unvisible', !fn);
  document.body.classList.toggle('stop-scroll', fn);
}

const form = document.getElementById('form');

// let startTime = Date.now();

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменить стандартное поведение формы

  var formData = new FormData(form);

  fetch('sendit.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); 
    if (data.includes("mailsend")) {
      alert('Ваша заявка успешно отправлена!');
    } else {
      alert('Произошла ошибка при отправке: ' + data); 
    }
  })
  .catch(error => console.error('Ошибка:', error));

  closeAll();
});


function toggleFormWindow(fn) {
  form.classList.toggle('modal__window_active', fn);
}

const privpol = document.getElementById('privpol');

function togglePrivpolWindow(fn) {
  privpol.classList.toggle('modal__window_active', fn);
}

const modalWindows = modal.querySelectorAll('.modal__window');

modalWindows.forEach((modalWindow) => {
  modalWindow.addEventListener('click', (event) => {
    event._isModalClick = true;
  });
});

function closeAll() {
  if (
    form.classList.contains('modal__window_active') &&
    privpol.classList.contains('modal__window_active')
  ) {
    togglePrivpolWindow(false);
  } else {
    modalWindows.forEach((modalWindow) => {
      modalWindow.classList.remove('modal__window_active');
    });

    toggleModal(false);
  }
}

const closers = modal.querySelectorAll('.closer');

closers.forEach((closer) => {
  closer.addEventListener('click', closeAll);
});

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    toggleModal(true);
    toggleFormWindow();
  });
});

document.querySelectorAll('.btn-privpol').forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleModal(true);
    togglePrivpolWindow();
  });
});

modal.addEventListener('click', (event) => {
  if (!event._isModalClick) closeAll();
});

const luzhnikiCell = document.getElementById('luzhniki-cell');
const luzhnikiWindow = document.getElementById('luzhniki-modal');

function toggleLuzhnikiWindow(fn = true) {
  toggleModal(fn);
  luzhnikiWindow.classList.toggle('modal__window_active', fn);
}

luzhnikiCell.addEventListener('click', toggleLuzhnikiWindow);
