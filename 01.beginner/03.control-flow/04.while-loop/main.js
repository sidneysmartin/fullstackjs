"use strict";
// while loop
// DRY -> Don't Repeat Yourself
//  Be careful with infinite loops

let i = 0;
let sum = 0;
let sumEven = 0;
let sumOdd = 0;
while (i <= 100) {
  sum += i;
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
  i++;
}
console.log(`Soma de todos os valores entre 0 e 100............: ${sum}`);
console.log(`Soma de todos os valores pares entre 0 e 100......: ${sumEven}`);
console.log(`Soma de todos os valores impares entre 0 e 100....: ${sumOdd}`);
