export function checkAgreement(section) {
  const checkBox = document.querySelector(section + ' .checkbox input');
  const btn = document.querySelector(section + '__btn');
  checkBox.addEventListener('input', () => {
    btn.disabled = !checkBox.checked;
  });
}
export function validationCheck(arr) {
  arr.forEach((element) => {
    element.addEventListener('input', (event) => {
      toggleError(event, true);
    });
    element.addEventListener('blur', (event) => {
      toggleError(event, false);
    });
  });
}

function toggleError(event, condition) {
  setTimeout(() => {
    const tar = event.target;
    const label = tar.parentNode.querySelector('.just-validate-error-label');

    let fn = condition ? 'add' : 'remove';

    tar.classList[fn]('reset-input');
    if (label) label.classList[fn]('unvisible');
  }, 300);
}
