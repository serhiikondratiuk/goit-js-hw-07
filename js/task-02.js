const ingredients = [
 'Картошка',
 'Грибы',
 'Чеснок',
 'Помидоры',
 'Зелень',
 'Приправы',
];
const ingredientsListEl = document.querySelector('#ingredients');
const newIngredientsListEl = [];

ingredients.map(ingredient => {
 const liEl = document.createElement('li');
 liEl.innerText = ingredient;
 newIngredientsListEl.push(liEl);
});
ingredientsListEl.append(...newIngredientsListEl);
