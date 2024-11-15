"use strict";
// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------

// Solution

const calculateProduct = (numbers) => {
  return numbers.reduce((previous, current) => previous * current);
};

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product);
