const bars = document.querySelectorAll('.range__bar input');
const prices = document.querySelectorAll('.range__price input');
const progress = document.querySelector('.range__progress');

prices.forEach((input) => {
  input.addEventListener('input', (event) => {
    let minVal = parseInt(prices[0].value);
    let maxVal = parseInt(prices[1].value);

    const gap = 10000;

    if (maxVal - minVal >= gap && maxVal <= 200000) {
      if (event.target === prices[0]) {
        bars[0].value = minVal;
        progress.style.left = (minVal / prices[0].max) * 100 + '%';
      } else {
        bars[1].value = maxVal;
        progress.style.right = 100 - (maxVal / prices[1].max) * 100 + '%';
      }
    }
  });
});

bars.forEach((input) => {
  input.addEventListener('input', (event) => {
    let minVal = parseInt(bars[0].value);
    let maxVal = parseInt(bars[1].value);

    const gap = 10000;

    if (maxVal - minVal < gap) {
      if (event.target === bars[0]) bars[0].value = maxVal - gap;
      else bars[1].value = minVal + gap;
    } else {
      prices[0].value = minVal;
      prices[1].value = maxVal;
      progress.style.left = (minVal / bars[0].max) * 100 + '%';
      progress.style.right = 100 - (maxVal / bars[1].max) * 100 + '%';
    }
  });

  input.addEventListener('focus', () => {
    progress.classList.add('range__progress_active');
  });

  input.addEventListener('blur', () => {
    progress.classList.remove('range__progress_active');
  });

  input.addEventListener('mousedown', () => {
    progress.classList.add('range__progress_active');
  });

  // input.addEventListener('mouseup', () => {
  //   progress.classList.remove('range__progress_active');
  // });
});
