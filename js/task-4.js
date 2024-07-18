const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);
registerForm.style.display = 'flex';
registerForm.style.alignItems = 'flex-start';
registerForm.style.justifyContent = 'flex-start';
registerForm.style.flexDirection = 'column';
registerForm.style.gap = '16px';
const input = document.querySelectorAll('input');
input.forEach(el => {
    el.style.display = 'block';
    el.style.width = '360px';
    el.style.height = '40px';
    el.style.borderRadius = '4px';
    el.style.border = '1px solid #808080';
    el.style.marginTop = "8px"
    el.style.paddingLeft = '16px'
    el.style.fontFamily = 'Montserrat, sans-serif';
    el.style.fontWeight = '400';
    el.style.fontSize = '16px';
    el.style.lineHeight = '1.5';
});

const button = document.querySelector('button');
button.style.display = 'block';
button.style.color = '#ffffff';
button.style.backgroundColor = '#4e75ff';
button.style.borderRadius = '8px';
button.style.width = '86px';
button.style.height = '40px';
button.style.border = 'none';
button.style.fontFamily = '"Montserrat", sans-serif';
button.style.lineHeight = '1.5';
button.style.letterSpacing = '0.04em';
button.style.fontWeight = '500';
button.style.fontSize = '16px';
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

