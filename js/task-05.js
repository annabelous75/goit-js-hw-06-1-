const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
inputRef.addEventListener('input', OnInputChange);
function OnInputChange(event) {
    spanRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        return "Anonymous";
    }
}