"use strict";

// A function is a block of code that performs a specific task
// Functions makes the code reusable. You can declare it once and use it multiple times
// Functions makes the program easier as each small task is divided into a function
// Functions increases readability of the code
// DRY -> Don't Repeat Yourself
// function name(parameters) {...}

// Declaration
function greet() {
  console.log("Hello from function");
}
// call, run, execute, invoke
greet();

// Parameters
function sayHello(name) {
  console.log(`Hello ${name}`);
}
let varName = "John";
sayHello(varName);
sayHello("Brian");

// The return statement can be used to return the value to a function call.
function add(x, y) {
  return x + y;
}
// The function can be used to return the value to a function call.
function subtract(x, y) {
  console.log(`${x} - ${y} = ${x - y}`);
}
const sum = add(17, 15);
console.log(add(1, 2));
console.log(sum);

subtract(2004, 2012);
