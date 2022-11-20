const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const refUl = document.querySelector('#ingredients');

const newArr = [];
for (const ingredient of ingredients) {
  const elli = document.createElement('li');
  elli.classList.add("item");
  elli.textContent = ingredient;
  newArr.push(elli);
  
}
refUl.append(...newArr);
console.log(newArr);
//
/*const createliEl = options => {
  return options.map(option => {
    const Element = document.createElement("li");
    Element.classList.add("item");
    Element.textContent = option;
    return Element;
  });
};
const el = createliEl(ingredients);
console.log(el);
RefUl.append(...el);*/