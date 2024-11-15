"use strict";
// The spread  operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array, function, object) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.
/*
sintaxe:
...
*/

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
giveMe4(1, 2, 3, 4);
const colors = ["red", "green", "blue", "yellow"];
giveMe4(...colors);

const stfNumbers = ["one", "two", "three"];
const moreStrNumbers = ["four", "five", "six"];
const concatenated = [...stfNumbers, ...moreStrNumbers];
console.log(concatenated);

const people = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr",
];
const band = [...people, "Pete Best"];
console.log(band);

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const person = {
  name: "John Doe",
  age: 30,
};
console.log(person);
const clone = { ...person, work: "Developer", location: "New York" };
console.log(clone);
