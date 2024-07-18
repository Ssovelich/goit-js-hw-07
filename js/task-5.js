function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const div = document.querySelector('.widget');
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.flexDirection = 'column';
div.style.gap = '16px';
div.style.marginTop = '100px'

const changeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  const textColor = document.querySelector('.color');
  textColor.textContent = randomColor;
};
const tegP = document.querySelector('div > p');
tegP.style.fontWeight = '400';
tegP.style.fontSize = '16px';
tegP.style.margin = '0';
tegP.style.fontFamily = '"Montserrat", sans-serif';
tegP.style.lineHeight = '1.5';
tegP.style.letterSpacing = '0.04em';

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener("click", changeColor, true);
changeColorBtn.style.backgroundColor = '#4e75ff';
changeColorBtn.style.border = 'none';
changeColorBtn.style.width = '148px';
changeColorBtn.style.height = '40px';
changeColorBtn.style.borderRadius = '8px';
changeColorBtn.style.color = '#ffffff';
changeColorBtn.style.fontFamily = '"Montserrat", sans-serif';
changeColorBtn.style.lineHeight = '1.5';
changeColorBtn.style.letterSpacing = '0.04em';
changeColorBtn.style.fontWeight = '500';
changeColorBtn.style.fontSize = '16px';





