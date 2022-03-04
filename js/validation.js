const form = document.getElementById('desktop-form');
//const firstName = document.getElementById('first-name');
//const lastName = document.getElementById('last-name');
//const name = document.getElementById('name');
const email = document.getElementById('desktop-email');

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
<<<<<<< HEAD
=======
    console.log(emailValue);
>>>>>>> 30d92d86c7c9493a802918bd18bac01200dd82e3
    const lowerEmail = emailValue.toLowerCase();


    if (emailValue !== lowerEmail) {
        setErrorFor(email, 'Email should be in lowercase');
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
}
