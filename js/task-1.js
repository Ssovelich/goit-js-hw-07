const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(category => {
    const title = category.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const elements = category.querySelectorAll("ul > li");
    console.log(`Elements: ${elements.length}`);
});
