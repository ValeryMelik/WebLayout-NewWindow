const burger = document.querySelector('.m-block__nav');
const list = document.querySelector('.m-block__list');
const openBtn = document.querySelector('.m-block__burger');
const title = document.querySelector('.m-block__main-title');

const ACTIVE_MENU_BURGER_CLS = 'm-block__burger_active';
const ACTIVE_MENU_BURGER_VISIBILITY = 'm-block__nav_visible';
const ACTIVE_NAV_CLS = 'm-block__nav_active';
const CONTAINER_CLS = 'container';
const STOP_SCROLL_BODY_CLS = 'stop-scroll';

function media() {
  const mediaQuery = window.matchMedia('(max-width: 931px)');

  list.classList.toggle(CONTAINER_CLS, mediaQuery.matches);
}

media();

function setBurgerState(state) {
  let fn;
  if (state === true) {
    fn = 'add';
  } else if (state === false) {
    fn = 'remove';
  } else {
    fn = 'toggle';
  }

  openBtn.classList[fn](ACTIVE_MENU_BURGER_CLS);
  burger.classList[fn](ACTIVE_NAV_CLS);
  document.body.classList[fn](STOP_SCROLL_BODY_CLS);
}

let isBurgerVisible = false;

title.addEventListener('click', () => {
  location.reload(true);
});

openBtn.addEventListener('click', () => {
  setBurgerState();
  if (!isBurgerVisible) {
    burger.classList.add(ACTIVE_MENU_BURGER_VISIBILITY);
    isBurgerVisible = true;
  }
});

const menuLinks = burger.querySelectorAll('.m-block__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setBurgerState(false);
  });
});

window.addEventListener('resize', () => {
  setBurgerState(false);
  if (isBurgerVisible) {
    burger.classList.remove(ACTIVE_MENU_BURGER_VISIBILITY);
    isBurgerVisible = false;
  }

  media();
});
