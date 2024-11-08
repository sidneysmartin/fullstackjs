"use strict";
// Arrays -> 0-indexed
// An array is an object that can store multiple values of different data types for example,
// const words = ["hello", "world", "welcome"];
// ['string', 123, true, []]
// -----------------------------------

// -----------------------------------
// empty array
const myArray = [];
// -----------------------------------
// array of numbers
const numbers = [1, 2, 3, 4, 5];
// -----------------------------------
// array of strings
const strings = ["hello", "world", "welcome"];
// -----------------------------------
// array of mixed
const mixed = ["hello", 123, true, []];
// -----------------------------------
// ACCESSING ITEMS
const myList = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"];

// 1. Accessing first item
console.log(myList[0]); // h
// 2. Accessing last item
console.log(myList[myList.length - 1]); // d
// -----------------------------------
// Two Dimension or Nested Array
const nestedArray = ["hello", ["world", ["welcome"]], true, 1, false];
console.log(nestedArray);
console.log(nestedArray[1][1]); // welcome
