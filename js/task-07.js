const refs = {
 fontSizerEl: document.querySelector('#font-size-control'),
 textEl: document.querySelector('#text'),
};

refs.fontSizerEl.addEventListener('input', event => {
 refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
});
