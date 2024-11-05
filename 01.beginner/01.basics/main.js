"use strict";
let variable = "Hello World!";
console.log(variable);

console.warn("This is a warning");
console.error("This is an error");
console.table({
  language: "JavaScript",
  version: "ES6",
  type: "Dynamic Web App",
});

const button = document.querySelector("#alertButton");
button.addEventListener("click", () => {
  window.alert(variable);
  console.log("Button clicked");
});
