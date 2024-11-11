"use strict";
// The ternary operator in JavaScript is a concise way of writing conditional expressions.
// It is the only JavaScript operator that takes three operands: a condition followed by a question mark(?),
//an expression to execute if the condition is true, followed by a colon(: ), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

/*
let password = 7;

function passwordChecker(ps) {
  // if (ps === 8) {
  //   return `Strong password`;
  // } else {
  //   return `Password should be 8 characters`;
  // }
  return ps === 8 ? `Strong password` : `Password should be 8 characters`;
}
const res = passwordChecker(password);
console.log(res);
*/
const age = 30;
const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(isAdult);

let personMoney = false;
let haveMoney =
  personMoney === true ? "Buy products" : " They should bring money";
console.log(haveMoney);
