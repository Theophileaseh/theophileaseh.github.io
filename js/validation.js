const form = document.querySelector('form');
//const firstName = document.getElementById('first-name');
//const lastName = document.getElementById('last-name');
//const name = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function checkInputs() {
    //const firstnameValue = firstName.value.trim();
    //const lastnameValue = firstName.value.trim();
    //const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const lowerEmail = emailValue.toLowerCase();


    if (emailValue !== lowerEmail) {
        setErrorFor(email, 'Email should be in lowercase');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}