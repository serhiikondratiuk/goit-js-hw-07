const ingredients = [
 'Картошка',
 'Грибы',
 'Чеснок',
 'Помидоры',
 'Зелень',
 'Приправы',
];
const ingredientsListEl = document.querySelector('#ingredients');

const newIngredientsListEl = ingredients.map(ingredient => {
 const liEl = document.createElement('li');
 liEl.innerText = ingredient;
 return liEl;
});
ingredientsListEl.append(...newIngredientsListEl);
