"use strict";
// Booleans are only true or false
let isEven = true;
let isOdd = true;
let isNum = NaN;
let isTrue = true;
let isFalse = false;
let isTruthy = true;
let isFalsy = false;
const isThan = 5 > 3; // true
const isLessThan = 5 < 3; // false
const isGreaterThan = 5 > 3; // false
const isLessThanOrEqual = 5 <= 3; // false
const isGreaterThanOrEqual = 5 >= 3; // true
// ! = not
console.log(!isNum);
// || = or
console.log(isEven || isOdd);
// && = and
console.log(isEven && isOdd);
// null
let notNull = null;
// console.log(notNull);// null
// 0
// ""
// NaN
//console.log(isNum);
// undefined
let notDefined = undefined;
// console.log(notDefined);// undefined
//console.log(isTruthy);

console.log(`True && True: ${true && true}`); // true
console.log(`True && False: ${true && false}`); // false
console.log(`False && True: ${false && true}`); // false
console.log(`False && False: ${false && false}`); // false
console.log(`True || True: ${true || true}`); // true
console.log(`True || False: ${true || false}`); // true
console.log(`False || True: ${false || true}`); // true
console.log(`False || False: ${false || false}`); // false

// https://youtu.be/H3XIJYEPdus?list=PLSDeUiTMfxW4zCLgOQgz4PWSN0QRmUUFR&t=3851
