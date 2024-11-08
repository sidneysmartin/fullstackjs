"use strict";
// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

// concat()
const languages = ["HTML", "CSS", "JS"];
const frameworks = ["Bootstrap", "Tailwind css", "React js"];
const newArray = languages.concat(frameworks);
console.log(newArray);

// includes()
const months = ["January", "February", "March", "April", "May", "June"];
console.log(months.includes("May"));

// push()
months.push("July");
console.log(months);

// unshift()
months.unshift("Dec");
console.log(months);

// pop()
months.pop();
console.log(months);

// shift
months.shift();
console.log(months);

// sort()
months.sort();
console.log(months);

// slice()
const months2 = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months2.slice(1, 4));

// splice()
months2.splice(2, 0, "Jan", "Feb", "March");
console.log(months2);

// inserts at index 1
months2.splice(1, 0, "April", "May");
console.log(months2);

// replaces 1 element at index 4

months2.splice(4, 1, "June");
console.log(months2);
