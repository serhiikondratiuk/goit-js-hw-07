const inputEl = document.querySelector('#validation-input');
const validDataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onBlurValidation);

function onBlurValidation() {
 if (inputEl.value.length == validDataLength) {
  inputEl.classList.remove('invalid');
  inputEl.classList.add('valid');
 } else {
  inputEl.classList.remove('valid');
  inputEl.classList.add('invalid');
 }
}
