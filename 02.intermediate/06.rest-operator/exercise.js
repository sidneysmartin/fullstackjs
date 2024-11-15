"use strict";
// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

function sum(...args) {
  return args.reduce((previous, current) => previous + current);
}

console.log(sum(1, 2));
console.log(sum(3, 4, 5));
console.log(sum(6, 7, 8, 9));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
