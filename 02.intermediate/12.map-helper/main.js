"use strict";
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// So here what's going on, each number in the numbers array is being passed
// --> Into anonymous function that we're passing in,
// --> Whatever this function returns is placed into a new array,
// --> After each elements has being processed that new array is return.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doubledNumbers = numbers.map((number) => number * 2);
console.log(`Array original: ${numbers}\nArray dobrado: ${doubledNumbers}`);

let actors = [
  { firstName: "Arnold", lastname: "Schwarzenegger" },
  { firstName: "Liam", lastname: "Neeson" },
  { firstName: "Ewan", lastname: "McGregor" },
  { firstName: "Natalie", lastname: "Portman" },
  { firstName: "Robert", lastname: "Downey Jr." },
];

const result = actors.map((actor) => {
  return [actor.firstName, actor.lastname];
});

console.log(result);
