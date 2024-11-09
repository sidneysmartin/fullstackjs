"use strict";
// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.
// ------------------------------------
// Defining a method outside the object

const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    // a method is a function that is associated with an object
    return `Hello my name is ${person.name} & I am ${person.age} years old`;
  },
};
console.log(person.greet());
