function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const createBtn = document.querySelector('button');
const boxes = document.querySelector('#boxes');
const destroyBtn = document.querySelector('button + button');


const createBoxes = amount => {
  let boxesArr = [];
  destroyBoxes();
  if (amount >= 1 && amount <= 100 ) {
    for (let i = 0; i < amount; i++) {
      boxesArr.push(`<div class="boxes-item" style="width:${30 + i * 10}px; height:${30 + i * 10}px; background: ${getRandomHexColor()};"></div>`)
    }
};
  return boxes.innerHTML = boxesArr.join('')
};

const onCreateBtnClick = () => {
  createBoxes(inputElement.value);
};

createBtn.addEventListener('click', onCreateBtnClick);

const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputElement.value = '';
};
  
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
