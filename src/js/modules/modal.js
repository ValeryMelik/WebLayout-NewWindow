const modal = document.getElementById('modal');

function toggleModal(fn) {
  modal.classList.toggle('unvisible', !fn);
  document.body.classList.toggle('stop-scroll', fn);
}

const form = document.getElementById('form');
const timeOnSiteInput = form.querySelector('input[name="time_on_site"]');
let startTime = Date.now();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const timeOnSite = Math.floor((Date.now() - startTime) / 1000);
  timeOnSiteInput.value = timeOnSite;

  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  fetch('sendit.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      if (data.includes('mailsend')) {
        alert('Ваша заявка успешно отправлена!');
      } else {
        alert('Произошла ошибка при отправке: ' + data);
      }
    })
    .catch((error) => console.error('Ошибка:', error));

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

const tretyakCell = document.getElementById('tretyak-cell');
const tretyakWindow = document.getElementById('tretyak-modal');

function toggleTretyakWindow(fn = true) {
  toggleModal(fn);
  tretyakWindow.classList.toggle('modal__window_active', fn);
}

tretyakCell.addEventListener('click', toggleTretyakWindow);

const cadetCell = document.getElementById('cadet-cell');
const cadetWindow = document.getElementById('cadet-modal');

function toggleCadetWindow(fn = true) {
  toggleModal(fn);
  cadetWindow.classList.toggle('modal__window_active', fn);
}

cadetCell.addEventListener('click', toggleCadetWindow);

const transnefCell = document.getElementById('transnef-cell');
const transnefWindow = document.getElementById('transnef-modal');

function toggleTransnefWindow(fn = true) {
  toggleModal(fn);
  transnefWindow.classList.toggle('modal__window_active', fn);
}

transnefCell.addEventListener('click', toggleTransnefWindow);

const frunze47Cell = document.getElementById('frunze-47-cell');
const frunze47Window = document.getElementById('frunze-47-modal');

function toggleFrunze47Window(fn = true) {
  toggleModal(fn);
  frunze47Window.classList.toggle('modal__window_active', fn);
}

frunze47Cell.addEventListener('click', toggleFrunze47Window);

const metromallCell = document.getElementById('metromall-cell');
const metromallWindow = document.getElementById('metromall-modal');

function toggleMetromallWindow(fn = true) {
  toggleModal(fn);
  metromallWindow.classList.toggle('modal__window_active', fn);
}

metromallCell.addEventListener('click', toggleMetromallWindow);

const cosmosCell = document.getElementById('cosmos-cell');
const cosmosWindow = document.getElementById('cosmos-modal');

function toggleCosmosWindow(fn = true) {
  toggleModal(fn);
  cosmosWindow.classList.toggle('modal__window_active', fn);
}

cosmosCell.addEventListener('click', toggleCosmosWindow);

const frunze38Cell = document.getElementById('frunze-38-cell');
const frunze38Window = document.getElementById('frunze-38-modal');

function toggleFrunze38Window(fn = true) {
  toggleModal(fn);
  frunze38Window.classList.toggle('modal__window_active', fn);
}

frunze38Cell.addEventListener('click', toggleFrunze38Window);

const tk22decCell = document.getElementById('tk-22dec-cell');
const tk22decWindow = document.getElementById('tk-22dec-modal');

function toggleTk22decWindow(fn = true) {
  toggleModal(fn);
  tk22decWindow.classList.toggle('modal__window_active', fn);
}

tk22decCell.addEventListener('click', toggleTk22decWindow);

const tkOkayCell = document.getElementById('tk-okay-cell');
const tkOkayWindow = document.getElementById('tk-okay-modal');

function toggleTkOkayWindow(fn = true) {
  toggleModal(fn);
  tkOkayWindow.classList.toggle('modal__window_active', fn);
}

tkOkayCell.addEventListener('click', toggleTkOkayWindow);

const kfcCell = document.getElementById('kfc-cell');
const kfcWindow = document.getElementById('kfc-modal');

function toggleKfcWindow(fn = true) {
  toggleModal(fn);
  kfcWindow.classList.toggle('modal__window_active', fn);
}

kfcCell.addEventListener('click', toggleKfcWindow);

const magnitCell = document.getElementById('magnit-cell');
const magnitWindow = document.getElementById('magnit-modal');

function toggleMagnitWindow(fn = true) {
  toggleModal(fn);
  magnitWindow.classList.toggle('modal__window_active', fn);
}

magnitCell.addEventListener('click', toggleMagnitWindow);

const univerCell = document.getElementById('univer-cell');
const univerWindow = document.getElementById('univer-modal');

function toggleUniverWindow(fn = true) {
  toggleModal(fn);
  univerWindow.classList.toggle('modal__window_active', fn);
}

univerCell.addEventListener('click', toggleUniverWindow);

const duckmountCell = document.getElementById('duckmount-cell');
const duckmountWindow = document.getElementById('duckmount-modal');

function toggleDuckmountWindow(fn = true) {
  toggleModal(fn);
  duckmountWindow.classList.toggle('modal__window_active', fn);
}

duckmountCell.addEventListener('click', toggleDuckmountWindow);

const dom4severCell = document.getElementById('dom4sever-cell');
const dom4severWindow = document.getElementById('dom4sever-modal');

function toggleDom4severWindow(fn = true) {
  toggleModal(fn);
  dom4severWindow.classList.toggle('modal__window_active', fn);
}

dom4severCell.addEventListener('click', toggleDom4severWindow);

const tundraCell = document.getElementById('tundra-cell');
const tundraWindow = document.getElementById('tundra-modal');

function toggleTundraWindow(fn = true) {
  toggleModal(fn);
  tundraWindow.classList.toggle('modal__window_active', fn);
}

tundraCell.addEventListener('click', toggleTundraWindow);

const townhousesCell = document.getElementById('townhouses-cell');
const townhousesWindow = document.getElementById('townhouses-modal');

function toggleTownhousesWindow(fn = true) {
  toggleModal(fn);
  townhousesWindow.classList.toggle('modal__window_active', fn);
}

townhousesCell.addEventListener('click', toggleTownhousesWindow);

const greenIslandCell = document.getElementById('greenIsland-cell');
const greenIslandWindow = document.getElementById('greenIsland-modal');

function toggleGreenIslandWindow(fn = true) {
  toggleModal(fn);
  greenIslandWindow.classList.toggle('modal__window_active', fn);
}

greenIslandCell.addEventListener('click', toggleGreenIslandWindow);

const brusnikaCell = document.getElementById('brusnika-cell');
const brusnikaWindow = document.getElementById('brusnika-modal');

function toggleBrusnikaWindow(fn = true) {
  toggleModal(fn);
  brusnikaWindow.classList.toggle('modal__window_active', fn);
}

brusnikaCell.addEventListener('click', toggleBrusnikaWindow);
