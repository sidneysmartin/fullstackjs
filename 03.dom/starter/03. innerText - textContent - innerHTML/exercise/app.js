// 1. Check the innerText of "first" element
const first = document.querySelector(".first");
console.log(first.innerText);
first.innerText = "Text changed by innerText";
// 2. Check the textContent of "second" element
const second = document.querySelector(".second");
console.log(second.textContent);
second.textContent = "Text changed by textContent";
// 3. Check the innerHTML of "third" element
const third = document.querySelector(".third");
console.log(third.innerHTML);
third.innerHTML = "Text changed by innerHTML";
