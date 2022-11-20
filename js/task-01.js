
const categoryRefAll = document.querySelectorAll('.item');
console.log("Number of categories", categoryRefAll.length);
categoryRefAll.forEach(categoryFunction);
function categoryFunction(category) {
    const categoryEl = category.firstElementChild;
    console.log("Category:", categoryEl.textContent);
    const categorylist = categoryEl.nextElementSibling;
    console.log("Elements:", categorylist.childElementCount);
}