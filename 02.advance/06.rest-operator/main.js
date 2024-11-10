"use strict";
// The rest parameter syntax allows a function to
// accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

// -------------------------------
// Syntax
// function functionName(parameter1, parameter2, ..., parameterN, restParameter) {...}

function user(somethingElse, ...userData) {
  console.log(somethingElse);
  console.log(userData);
}
user("John Doe", 30, "Developer", "Los Angeles"); //somethingElse = "John Doe", userData = [30, "Developer", "Los Angeles"]

function person(firstName, lastName, ...hobbies) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Hobbies: ${hobbies}`);
}

person("John", "Doe", "Programming", "Reading", "Running", "Cooking");
