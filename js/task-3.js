const textInput = document.querySelector('#name-input');
const textAll = document.querySelector('h1')
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value.trim() || 'Anonymous';
})
