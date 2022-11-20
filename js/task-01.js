
const categoryRefAll = document.querySelectorAll('li.item');
console.log("Number of categories", categoryRefAll.length);

const category1 = categoryRefAll[0].firstElementChild;
console.log("Category: ", category1.textContent);
const listAlerts = category1.nextElementSibling;

const childofList = listAlerts.children.length;
console.log("Elements:  ", childofList);

const category2 = categoryRefAll[1].firstElementChild;
console.log("Category: ", category2.textContent);
const listAlerts2 = category2.nextElementSibling;

const childofList2 = listAlerts2.children.length;
console.log("Elements:  ", childofList2);

const category3 = categoryRefAll[2].firstElementChild;
console.log("Category: ", category3.textContent);
const listAlerts3 = category3.nextElementSibling;

const childofList3 = listAlerts3.children.length;
console.log("Elements:  ", childofList3);