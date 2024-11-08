"use strict";
// for loop
// DRY -> Don't Repeat Yourself
// for (initialExpression; condition; incrementExpression) {}

function printWord() {
  let word = "JavaScript";
  for (let i = 0; i < 10; i++) {
    console.log(word);
  }
}
function printEven() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// printEven();

function printFibo() {
  // this function prints the values in the array
  const array = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printFibo();
