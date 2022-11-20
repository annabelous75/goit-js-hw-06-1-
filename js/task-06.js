const inputRef = document.querySelector('#validation-input');
const Numberinput = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', OnInputBlur);
function OnInputBlur(event) {
    if (event.currentTarget.value.length === Numberinput) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
}
