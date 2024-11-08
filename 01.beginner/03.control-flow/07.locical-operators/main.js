"use strict";
// -----------------------------------
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true;
const b = false;
const c = 4;

console.log(a && b); // false
console.log(c > 2 && c <= 4); // true
console.log(c % 2 == 1); // false

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE
console.log(a || b); // true
console.log(c > 5 || c <= 10);

// -----------------------------------
// 3. Logical NOT (!)
// TRUE if the operand is false and vice-versa.
console.log(!a); // false
console.log(!b); // true
// -----------------------------------
let password = "pass-word";
if (password.length >= 10 && password.includes("pass")) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
