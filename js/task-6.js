function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
// console.log(controls);
const inputElement = document.querySelector('input');
const boxes = document.querySelector('#boxes');
// console.log(inputElement);
const amount = inputElement.value;
console.log(amount);


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let boxElement = document.createElement('div')
    console.log('test');
    boxes.append(boxElement)
      }
    };


if (amount >= 1 && amount <= 100 ) {
   createBoxes()
};
// console.log(createBoxes());

const create = () => {
  const crb = createBoxes(amount);
};

const createBtn = document.querySelector('button');
// console.log(createBtn);
createBtn.addEventListener("click", create);
// const destroyBtn = document.querySelector('button + button');
// console.log(destroyBtn);

