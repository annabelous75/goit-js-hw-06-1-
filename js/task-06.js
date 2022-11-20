const inputRef = document.querySelector('#validation-input');
const numberinput = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length === numberinput) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
}
