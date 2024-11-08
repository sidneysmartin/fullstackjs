"use strict";
// do while loop is like while loop but it will execute the loop at least once
// DRY -> Don't Repeat Yourself
//  Be careful with infinite loops

let i = 0;
let sum = 0;
let sumEven = 0;
let sumOdd = 0;
do {
  sum += i;
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
  i++;
} while (i <= 100);
console.log(`Soma de todos os valores entre 0 e 100............: ${sum}`);
console.log(`Soma de todos os valores pares entre 0 e 100......: ${sumEven}`);
console.log(`Soma de todos os valores impares entre 0 e 100....: ${sumOdd}`);
