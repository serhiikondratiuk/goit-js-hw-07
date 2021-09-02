const refs = {
 inputEl: document.querySelector('#name-input'),
 outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', event => {
 refs.outputEl.textContent = event.currentTarget.value;
 if (!refs.outputEl.textContent.length) {
  refs.outputEl.textContent = 'незнакомец';
 }
});
