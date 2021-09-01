const inputEl = document.querySelector('#validation-input');
const validDataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onBlurValidation);

function toggleClass(revomeClass, addClass) {
 inputEl.classList.remove(revomeClass);
 inputEl.classList.add(addClass);
}

function onBlurValidation() {
 if (inputEl.value.length === Number(validDataLength)) {
  toggleClass('invalid', 'valid');
 } else {
  toggleClass('valid', 'invalid');
 }
}
