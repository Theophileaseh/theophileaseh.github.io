const form = document.getElementById('desktop-form');
//const firstName = document.getElementById('first-name');
//const lastName = document.getElementById('last-name');
//const name = document.getElementById('name');
const email = document.getElementById('desktop-email');
const errorMessage = document.querySelector('#error');

console.log('form linked');

form.addEventListener('submit', (e) => {
    if(checkInputs()) {
        ;
    } else {
        e.preventDefault();
    }
});

function checkInputs() {
    //const firstnameValue = firstName.value.trim();
    //const lastnameValue = firstName.value.trim();
    //const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    console.log(emailValue);
    const lowerEmail = emailValue.toLowerCase();


    if (emailValue !== lowerEmail) {
        setErrorFor(email, 'Email should be in lowercase');
        //errorMessage.classList.add('error');
        return false;
    } else {
        return true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
    errorMessage.classList.add('smallerror');
    form.classList.add('formerror');
}
