document.querySelectorAll('.accordion__btn').forEach((button) => {
  button.addEventListener('click', () => {
    const body = button.closest('.accordion').querySelector('.accordion__body');
    const buttonText = button.querySelector('span');
    const buttonIcon = button.querySelector('svg');

    // Меняем состояние аккордеона
    if (body.classList.contains('accordion__body_collapsed')) {
      body.classList.remove('accordion__body_collapsed');
      buttonText.textContent = 'Свернуть';
      buttonIcon.classList.remove('accordion__svg_rotated');
    } else {
      body.classList.add('accordion__body_collapsed');
      buttonText.textContent = 'Развернуть';
      buttonIcon.classList.add('accordion__svg_rotated');
    }
  });
});
