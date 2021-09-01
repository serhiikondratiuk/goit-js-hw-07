const refs = {
 controlsEl: document.querySelector('#controls'),
 inputEl: document.querySelector('[step="1"]'),
 createBtnEL: document.querySelector('[data-action="render"]'),
 clearBtnEl: document.querySelector('[data-action="destroy"]'),
 boxesEL: document.querySelector('#boxes'),
};

refs.createBtnEL.addEventListener('click', createBoxes);
refs.clearBtnEl.addEventListener('click', destroyBoxes);

const randomColor = () =>
 `rgb(${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)})`;

let counter = 10;

function createBoxes(amount) {
 const newBoxes = refs.boxesEL.children.length;
 amount = refs.inputEl.value - 1;
 const newBox = document.createElement('div');
 refs.boxesEL.append(newBox);
 newBox.style.width = `${20 + counter}px`;
 newBox.style.height = `${20 + counter}px`;
 counter += 10;
 newBox.style.backgroundColor = randomColor();
 if (newBoxes < amount && amount !== 0) {
  createBoxes();
 }
}
function destroyBoxes() {
 refs.boxesEL.innerHTML = '';
 counter = 10;
}
