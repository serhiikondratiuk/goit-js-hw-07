const categoriesEl = document.querySelector('#categories');
const itemsEl = [...categoriesEl.children];

console.log(`В списке ${itemsEl.length} категории.`);
itemsEl.map(item => {
 console.log(`Категория: ${item.firstElementChild.textContent}`);
 console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
