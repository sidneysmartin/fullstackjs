"use strict";

// --------------------------
// Assigning new variable names
const num = { x: 100, y: 350 };
const { x: new1, y: new2 } = num;
// console.log(x); // x is not defined
// console.log(y); // y is not defined
console.log(new1); // 100
console.log(new2); // 100

// --------------------------
// Assignment without declaration

// --------------------------
// Object destructuring and rest operator
let { a, b, ...rest } = { a: 300, b: 400, c: 500, d: 600, e: 700 };
console.log(a);
console.log(b);
console.log(rest);
