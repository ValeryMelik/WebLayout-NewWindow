document.querySelector('.showmore').addEventListener('click', () => {
  const button = document.querySelector('.showmore');
  const buttonText = button.querySelector('.showmore__capture');
  const buttonIcon = button.querySelector('.showmore__svg');

  if (buttonText.textContent.trim() === 'Посмотреть другие объекты') {
    buttonText.textContent = 'Свернуть список объектов';
    buttonIcon.classList.add('rotate-up');
  } else {
    buttonText.textContent = 'Посмотреть другие объекты';
    buttonIcon.classList.remove('rotate-up');

    window.scrollTo({
      top: document.getElementById(`portfolio-section`).offsetTop,
      behavior: 'smooth',
    });
  }

  ['.liveobj', '.curobj'].forEach((selector) => {
    const element = document.querySelector(selector);

    if (element.classList.contains('appearance')) {
      element.classList.remove('appearance');
      element.classList.add('disappearance');

      setTimeout(() => {
        element.style.display = 'none';
      }, 500);
    } else {
      element.classList.remove('disappearance');
      element.style.display = 'block';
      element.classList.add('appearance');
    }
  });
});
