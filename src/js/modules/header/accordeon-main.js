const CATEGORY__HEAD = '.hcategory__head';
const CATEGORY__HEAD_ACTIVE = 'hcategory__head_active';
const CATEGORY__NAV = '.hcategory__nav';
const CATEGORY__NAV_ACTIVE = 'hcategory__nav_active';

const hcategory = document.querySelector(CATEGORY__HEAD);

function setStateCat(state = true) {
  let fn;
  state === true ? (fn = 'toggle') : (fn = 'remove');

  hcategory.classList[fn](CATEGORY__HEAD_ACTIVE);

  const nav = hcategory.parentNode.querySelector(CATEGORY__NAV);
  nav.classList[fn](CATEGORY__NAV_ACTIVE);
  nav.addEventListener('click', (event) => {
    event._isCatClick = true;
  });
}

hcategory.addEventListener('click', (event) => {
  event._isCatClick = true;
  setStateCat();
});

document.addEventListener('click', (event) => {
  if (!event._isCatClick) setStateCat(false);
});
