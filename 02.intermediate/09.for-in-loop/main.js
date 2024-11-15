"use strict";
// The " for-in" loop in JavaScript is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.
// for (let key in object){...}

let person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

for (let keys in person) {
  console.log(`${keys}: ${person[keys]}`);
}

let list = ["one", "two", "three", "four", "five"];
for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}

