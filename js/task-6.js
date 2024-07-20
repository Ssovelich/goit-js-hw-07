function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const createBtn = document.querySelector('button');
const boxes = document.querySelector('#boxes');
const destroyBtn = document.querySelector('button + button');

let boxesArr = [];
const createBoxes = amount => {
  if (amount >= 1 && amount <= 100 ) {
    for (let i = 0; i < amount; i++) {
      boxesArr.push(`<div class="boxes-item" width="${30 + i * 10}" height="${30 + i * 10}"></div>`)
    }
};
  return boxes.innerHTML = boxesArr.join('')
};

const onFieldInput = () => {
  createBoxes(inputElement.value);
};

createBtn.addEventListener('click', onFieldInput);

const boxEl = boxes.childNodes;
// console.log(boxEl);
boxEl.forEach(el => {
  el.style.backgroundColor = getRandomHexColor();
})
// console.log(boxEl.length);
const destroyBoxes = () => {
  for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].remove();
  }
};
  
destroyBtn.addEventListener('click', destroyBoxes)



