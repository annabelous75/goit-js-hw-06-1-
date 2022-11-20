
const form = document.querySelector(".login-form");

form.addEventListener('submit',checkField);

function checkField(event) {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const passwordelem = formElem.password.value;
    if (email.length === 0 || passwordelem.length === 0) {
        alert("Fill all fields, please");
        return;
    }
    const formInfo = {
        email,
        passwordelem,
    };
    console.log(formInfo);
    form.reset();
}
