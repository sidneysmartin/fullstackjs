"use strict";
// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}
// ------------------------

// ------------------------
// Creating Object

const user = {
  name: "John",
  lastname: "Doe",
  age: 30,
  location: ["South America", "Brazil"],
  isProgrammer: true,
  sayHello: function () {
    console.log("Hello");
  },
};
// Accessing Properties
console.log(user.name); // John

// Updating Properties
user.age = 31;
user.location = ["North America", "USA"];
user.sayHello();

// Add new properties
user.hobbies = ["Music", "Football"];
console.log(user.hobbies);
console.log(user);
