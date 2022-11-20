function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyref = document.querySelector('body');
const buttonref = document.querySelector('.change-color');
const spanref = document.querySelector('.color');

buttonref.addEventListener('click',changeColor);

function changeColor() {
  let color = getRandomHexColor();
  spanref.textContent = color;
  bodyref.style.backgroundColor = `${color}`;
}