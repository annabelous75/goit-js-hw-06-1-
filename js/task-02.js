const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const RefUl = document.querySelector('#ingredients');

const newArr = [];
for (const ingredient of ingredients) {
  const Elli = document.createElement('li');
  Elli.classList.add("item");
  Elli.textContent = ingredient;
  newArr.push(Elli);
  
}
RefUl.append(...newArr);
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