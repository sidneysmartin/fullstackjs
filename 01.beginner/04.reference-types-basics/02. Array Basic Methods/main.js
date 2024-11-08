"use strict";

// Method of Array

const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];
console.log(fruits);
// concat()	joins two or more arrays and returns a result
const newFruits = fruits.concat("orange", "banana");
console.log(newFruits);
// includes()	checks if an array contains a specified element
console.log(fruits.includes("banana"));
// push()	add a new element to the end of an array and returns the new length of an array
newFruits.push("kiwi");
console.log(fruits);
// unshift()	adds a new element to the beginning of an array and returns the new length of an array
newFruits.unshift("pear");
console.log(newFruits);
// pop()	removes the last element of an array and returns the removed element
newFruits.pop();
console.log(newFruits);
// shift()	removes the first element of an array and returns the removed element
newFruits.shift();
console.log(newFruits);
// sort()	sorts the elements alphabetically in strings and in ascending order
newFruits.sort();
console.log(newFruits);
// slice()	selects the part of an array and returns the new array
console.log(newFruits.length); // 8
console.log(newFruits.slice(0, 2));
// splice()	removes or replaces existing elements and/or adds new elements
console.log(newFruits);
newFruits.splice(0, 3);
console.log(newFruits);
// add using splice
newFruits.splice(7, 7, "watermelon", "dragon fruit");
console.log(newFruits);
