"use strict";
// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------

function showCallFunction(fn) {
  const value = 50;
  fn(value);
}

showCallFunction(function (value) {
  console.log(value);
});

// -------------------------------
// function
function greet(name, callBackFunction) {
  console.log(`Hello ${name}`);
  callBackFunction();
}
// callback function
function callMe() {
  console.log(`I am callback function`);
}
greet("John", callMe);
// passing function as an argument (callback)
