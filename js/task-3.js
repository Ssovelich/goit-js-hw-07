const textInput = document.querySelector('#name-input');
textInput.style.width = '360px'; 
textInput.style.height = '40px';
textInput.style.borderRadius = '4px';
textInput.style.border = '1px solid #808080';
textInput.style.fontFamily = 'Montserrat, sans-serif';
textInput.style.fontWeight = '400';
textInput.style.fontSize = '16px';
textInput.style.lineHeight = '1.5';
textInput.style.color = '#2e2f42';
textInput.style.letterSpacing = '0.04em';
textInput.style.paddingLeft = '16px'

const textAll = document.querySelector('h1')
textAll.style.fontFamily = 'Montserrat, sans-serif';
textAll.style.fontWeight = '600';
textAll.style.fontSize = '24px';
textAll.style.color = '#2e2f42';
textAll.style.lineHeight = '1.3';
textAll.style.letterSpacing = '0.04em';

const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value.trim() || 'Anonymous';
})


