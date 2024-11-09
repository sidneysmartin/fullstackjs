"use strict";

// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
// The two types of scope are local and global
// Global variables are those declared outside of a block.
// Local variables are those declared inside of a block.

// Global Scope
// Local Scope

let textMessage = "Good Evening"; // Global variable
console.log(textMessage);

function showMessage() {
  let textGreet = "Hello"; // Local variable
  console.log(textGreet);
}
// console.log(textGreet); // is not defined
showMessage();

// block
for (let i = 0; i < 10; i++) {
  console.log(i); // block scope - local
}
// console.log(i); // is not defined
