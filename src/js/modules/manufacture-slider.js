document.querySelectorAll('.manufacture__cell').forEach((cell, index) => {
  if (index === 0) return;

  cell.addEventListener('click', (event) => {
    const targetNum = event.target.dataset.number;
    const main = document.querySelector('.manufacture__cell_main');

    for (let i = 1; i <= 5; i++) {
      main.classList.remove('manufacture__cell_img-' + i);
    }
    main.classList.add('manufacture__cell_img-' + targetNum);
  });
});
