"use strict";
// ***********************************
// RELATIONAL OPERATORS
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to

let firstFavNumb = 9;
let secondFavNumb = 7;
console.log(
  `${firstFavNumb} > ${secondFavNumb} = ${firstFavNumb > secondFavNumb}`
);
console.log(
  `${firstFavNumb} < ${secondFavNumb} = ${firstFavNumb < secondFavNumb}`
);
console.log(
  `${firstFavNumb} >= ${secondFavNumb} = ${firstFavNumb >= secondFavNumb}`
);
console.log(
  `${firstFavNumb} <= ${secondFavNumb} = ${firstFavNumb <= secondFavNumb}`
);

// ***********************************
// EQUALITY OPERATORS
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

let firstValue = parseInt("9");
let secondValue = "9";

console.log(
  `${firstValue} === ${typeof firstValue} = ${firstValue === typeof firstValue}`
); // 9 === number = false
console.log(
  `${secondValue} === ${typeof secondValue} = ${
    secondValue === typeof secondValue
  }`
); // 9 === string = false
console.log(`${firstValue} === ${secondValue} = ${firstValue === secondValue}`); // 9 === number = false
console.log(`${firstValue} !== ${secondValue} = ${firstValue !== secondValue}`); // 9 !== 9 = true
console.log(`${firstValue} == ${secondValue} = ${firstValue == secondValue}`); // 9 == 9 = true
console.log(`${firstValue} != ${secondValue} = ${firstValue != secondValue}`); // 9 != 9 = false
