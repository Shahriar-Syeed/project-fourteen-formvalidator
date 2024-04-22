const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

let passwordsMatch = false;

// fucntion
function validateForm() {
  // Using Containt API
  isValid = form.checkValidity();
  console.log(isValid);
  // Style main message for an error
  if (!isValid) {
    message.textContent = `Please fill out all fields.`;
    message.style.color = 'crimson';
    messageContainer.style.borderColor = 'crimson';
    return;
  }
  //  Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = `Make sure password match.`;
    message.style.color = 'crimson';
    messageContainer.style.borderColor = 'crimson';
    password1El.style.borderColor = 'crimson';
    password2El.style.borderColor = 'crimson';
    return;
  }
  // If  form is valid and password match
  if(isValid && passwordsMatch){
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
    storeFormData();
    
  }
  
}
function storeFormData(){
  const user ={
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
    
  };
  // Do Something With user Data
  console.log(user);

}
function processFormData(e) {
  e.preventDefault();
  console.log(e);
  //  Validate Form
  validateForm();
  // if(isValid && passwordsMatch){
    
  //   storeFormData();
    
  // }
}
// Event Listener
form.addEventListener('submit', processFormData);
