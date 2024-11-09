"use strict";
// Arrow functions, also known as fat arrow functions,
//are a concise and shorter way to define functions in JavaScript.
// They were introduced in ECMAScript 6(ES6) and provide a more compact syntax compared to traditional function expressions;

// -------------------------------
// Syntax
// (parameters) => expression
// -------------------------------

const greet = (user) => {
  return `Hello ${user}`;
};

// // simple arrow function
// const greet = (user) => `Welcome ${user}`;

console.log(greet("John"));

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};
const mult = (a, b) => a * b;

const divide = (a, b) => a / b;
const power = (a, b) => a ** b;

console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(mult(6, 3));
console.log(divide(6, 3));
console.log(power(6, 3));
