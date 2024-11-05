"use strict";
// JavaScript has one number type
// Positive Number
// Negative Number
// Whole Number (integers)
// Decimal Numbers

let positiveNum = 10;

let negativeNum = -980;

let decimalNum = 3.14;

let convertInt = "54";
let convertFloat = "22.21";

console.log(`Número positivo: ${positiveNum} - tipo - ${typeof positiveNum}`);
console.log(`número negativo: ${negativeNum} - tipo - ${typeof negativeNum}`);
console.log(`número decimal: ${decimalNum} - tipo - ${typeof decimalNum}`);
console.log(
  `Converte para inteiro: ${parseInt(convertInt)} - tipo - ${typeof convertInt}`
);
console.log(
  `Converte para decimal: ${Number(
    parseFloat(convertFloat)
  )} - tipo - ${typeof convertFloat}`
);

// Basic Math Operations

const num1 = 22;
const num2 = 4;

console.log(`Adição - ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtração - ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplicação - ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Divisão - ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Modulo - ${num1} % ${num2} = ${num1 % num2}`);
console.log(`Potencia - ${num1} ^ ${num2} = ${num1 ** num2}`);

// Increment and Decrement
let increment = 0;
console.log(`Value: ${increment}`);
increment++;
console.log(`Increment: ${increment}`);
let decrement = 0;
decrement--;
console.log(`Decrement: ${decrement}`);
console.log(`Increment: ${++increment}`);
console.log(`Decrement: ${--decrement}`);
