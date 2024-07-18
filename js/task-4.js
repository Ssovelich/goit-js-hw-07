const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);
registerForm.style.display = 'flex';
registerForm.style.alignItems = 'flex-start';
registerForm.style.justifyContent = 'flex-start';
registerForm.style.flexDirection = 'column';
registerForm.style.gap = '16px';
const input = document.querySelector('input');
input.style.display = 'block';
input.style.width = '360px';
input.style.height = '40px';
input.style.borderRadius = '4px';
input.style.border = '1px solid #808080';
const button = document.querySelector('button');
button.style.display = 'block';
button.style.color = '#ffffff';
button.style.backgroundColor = '#4e75ff';
button.style.borderRadius = '8px';
button.style.width = '86px';
button.style.height = '40px';
button.style.border = 'none';
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
}

