const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector('#text');
console.log(inputRef);
console.log(spanRef);

inputRef.addEventListener('input',OnInputChange);
function OnInputChange(event) {
   // event.currentTarget.value = spanRef.style.fontSize;
    spanRef.style.fontSize = event.currentTarget.value + 'px';
}