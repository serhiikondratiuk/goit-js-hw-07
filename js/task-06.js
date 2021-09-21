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
// const refs = {
//  input: document.querySelector('#validation-input'),
// };

// let inputValue = refs.input.value.length;
// const dataLength = +refs.input.dataset.length;

// console.log(inputValue);
// console.log(dataLength);

// refs.input.addEventListener('blur', () => {
//  if (inputValue != dataLength) {
//   refs.input.classList.add('invalid');
//   refs.input.classList.remove('valid');
//  } else {
//   refs.input.classList.remove('invalid');
//   refs.input.classList.add('valid');
//  }
// });
