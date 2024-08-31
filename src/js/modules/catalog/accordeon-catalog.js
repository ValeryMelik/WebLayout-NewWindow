const FILTER__BLOCK_ACTIVE = 'filter__block_active';
const FILTER__NAME = '.filter__name';
const FILTER__NAME_ACTIVE = 'filter__name_active';
const FILTER__LIST = '.filter__list';
const FILTER__LIST_ACTIVE = 'filter__list_active';
const FILTER__RANGE = '.filter__range';
const FILTER__RANGE_ACTIVE = 'filter__range_active';

const filterArr = document.querySelectorAll(FILTER__NAME);

function setStateFil(item, state = true) {
  const block = item.parentNode;
  const list = item.parentNode.querySelector(FILTER__LIST);
  const range = item.parentNode.querySelector(FILTER__RANGE);

  block.classList.toggle(FILTER__BLOCK_ACTIVE, state);
  item.classList.toggle(FILTER__NAME_ACTIVE, state);
  if (list) list.classList.toggle(FILTER__LIST_ACTIVE, state);
  if (range) range.classList.toggle(FILTER__RANGE_ACTIVE, state);
}

filterArr.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event._isFilClick = true;

    const item =
      elem.parentNode.querySelector(FILTER__LIST) ||
      elem.parentNode.querySelector(FILTER__RANGE);

    if (
      item.classList.contains(FILTER__LIST_ACTIVE) ||
      item.classList.contains(FILTER__RANGE_ACTIVE)
    )
      filterArr.forEach((el) => {
        setStateFil(el, false);
      });
    else {
      filterArr.forEach((el) => {
        setStateFil(el, false);
      });
      setStateFil(elem);
    }
  });
});

document.querySelectorAll(FILTER__LIST).forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event._isFilClick = true;
  });
});

document.querySelector(FILTER__RANGE).addEventListener('click', (event) => {
  event._isFilClick = true;
});

document.addEventListener('click', (event) => {
  if (!event._isFilClick)
    filterArr.forEach((item) => {
      setStateFil(item, false);
    });
});
