// DOM SELECTORS
// 1. getElementByTagName
const firstH1 = document.getElementsByTagName("h1");
console.log(firstH1);
// 2. getElementById
const firstP = document.getElementById("main");
console.log(firstP);
// 3. getElementByClassName
const cls = document.getElementsByClassName("cls");
console.log(cls);
// 4. querySelector
//const cls1 = document.querySelector(".cls-1");//
const cls1 = document.querySelector("#id-1");
console.log(cls1);
// 5. querySelectorAll
const allLi = document.querySelectorAll("li");
console.log(allLi);
