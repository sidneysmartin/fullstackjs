"use strict";
// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition.
// It provides a clean and concise way to filter out elements from an array based on a specified condition.

// 1. Iterate over "ages" array
// 2. Print only adults, those who age is greater then 18

const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const res = ages.filter(checkAdult);
console.log(res);
// ---------------------

// ---------------------
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);
console.log(result);
