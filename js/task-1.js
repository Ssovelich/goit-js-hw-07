const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((caregory) => {
    const title = caregory.querySelector("h2");
    console.log(`Caregory: ${title.textContent}`);
    const elements = caregory.querySelectorAll("ul > li");
    console.log(`Elements: ${elements.length}`);
});





















// }
// const elements = document.querySelectorAll("li.item")
// elements.forEach(function (node, i) {
//         console.log(`Node: ${elements[i].lastElementChild.children}`);
//     console.log(elements);
//     // console.log(`Elements: ${elements.length}`);
// });






// const test = document.querySelectorAll("li");
// console.log(test);

