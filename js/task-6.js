function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const createBtn = document.querySelector('button');
const boxes = document.querySelector('#boxes');

let boxesArr = [];
const createBoxes = amount => {
  if (amount >= 1 && amount <= 100 ) {
    for (let i = 0; i < amount; i++) {
      boxesArr.push(`<div class="boxes-item" width="${30 + i * 10}" height="${30 + i * 10}" background-color="${getRandomHexColor()}"></div>`)
    }
};
  return boxes.innerHTML = boxesArr.join('')
};

const onFieldInput = () => {
  createBoxes(inputElement.value);
};


createBtn.addEventListener('click', onFieldInput);


// const boxesList = boxesArr.map(el => createBoxes(el));
// console.log(boxesList);

// boxes.innerHTML = createBoxes;




// boxes.innerHTML = createBoxes;

// console.log(inputElement);
// 
// console.log(amount);


// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     let boxElement = document.createElement('div')
//     console.log('test');
//     boxes.append(boxElement)
//       }
//     };


// if (amount >= 1 && amount <= 100 ) {
//    createBoxes()
// };
// console.log(createBoxes());

// const create = () => {
//   const crb = createBoxes(amount);
// };


// console.log(createBtn);
// createBtn.addEventListener("click", create);
// const destroyBtn = document.querySelector('button + button');
// console.log(destroyBtn);

