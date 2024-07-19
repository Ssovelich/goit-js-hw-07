const registerForm = document.querySelector('.login-form');
const button = document.querySelector('button');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const outputData = {}
    outputData.email = form.elements.email.value.trim();
    outputData.password = form.elements.password.value.trim();
    console.log(outputData);
    if (outputData.email === "" || outputData.password === "") {
       alert('All form fields must be filled in')
    }
    form.reset();
};

