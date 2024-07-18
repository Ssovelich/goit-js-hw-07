const textInput = document.querySelector('#name-input');
textInput.style.width = '360px'; 
textInput.style.height = '40px';
const textAll = document.querySelector('h1')
textAll.style.fontFamily = 'Montserrat, sans-serif';
textAll.style.fontWeight = '600';
textAll.style.fontSize = '24px';
textAll.style.color = '#2e2f42';
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value.trim() || 'Anonymous';
})