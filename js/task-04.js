const refs = {
 counterValueEl: document.querySelector('#value'),
 incrementEl: document.querySelector('[data-action="increment"]'),
 decrementEL: document.querySelector('[data-action="decrement"]'),
};

refs.incrementEl.addEventListener('click', onClickBtnIncrement);
refs.decrementEL.addEventListener('click', onClickBtnDecrement);

function onClickBtnIncrement() {
 let toNumber = Number(refs.counterValueEl.innerText);
 toNumber += 1;
 refs.counterValueEl.innerText = toNumber;
}

function onClickBtnDecrement() {
 let toNumber = Number(refs.counterValueEl.innerText);
 toNumber -= 1;
 refs.counterValueEl.innerText = toNumber;
}
