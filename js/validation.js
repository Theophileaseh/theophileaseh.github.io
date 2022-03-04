const form = document.getElementById('desktop-form');
const email = document.getElementById('desktop_email');
const errorMessage = document.querySelector('#error');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
  errorMessage.classList.add('smallerror');
  form.classList.add('formerror');
}

function checkInputs() {

  const emailValue = email.value.trim();
  const lowerEmail = emailValue.toLowerCase();

  if (emailValue !== lowerEmail) {
    setErrorFor(email, 'Email should be in lowercase');
    return false;
  } return true;
}

form.addEventListener('submit', (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  }
});