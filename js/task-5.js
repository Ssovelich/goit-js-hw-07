function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');

const changeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  const textColor = document.querySelector('.color');
  textColor.textContent = randomColor;
};

changeColorBtn.addEventListener("click", changeColor);
