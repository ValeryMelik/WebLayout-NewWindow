const burger = document.getElementById('burger');
const nav = document.querySelector('.header__nav');

function setBurgerState(state) {
  let fn;
  if (state === true) {
    fn = 'add';
  } else if (state === false) {
    fn = 'remove';
  } else {
    fn = 'toggle';
  }

  burger.classList[fn]('header__burger_closed');
  nav.classList[fn]('header__nav_closed');
  document.body.classList[fn]('stop-scroll');
}

let isBurgerVisible = false;

burger.addEventListener('click', () => {
  setBurgerState();

  if (!isBurgerVisible) {
    nav.classList.add('header__nav_closed');
    isBurgerVisible = true;
  }
});

const navLinks = nav.querySelectorAll('.header__link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setBurgerState(false);
  });
});

window.addEventListener('resize', () => {
  setBurgerState(false);
  if (isBurgerVisible) {
    nav.classList.remove('header__nav_closed');
    isBurgerVisible = false;
  }
});
