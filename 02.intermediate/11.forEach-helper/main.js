"use strict";

// When call the forEach helper we pass in anonymous callback function.
// This function gets called one time for every element in the array.
// Whatever is inside the function that logic happens

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black"];

colors.forEach(function (color) {
  console.log(color);
});

// Arrow function
colors.forEach((color) => {
  console.log(color);
});

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
values.forEach((v) => {
  sum += v;
});
console.log(sum);

const countries = ["finland", "denmark", "sweden", "norway", "iceland"];

const capWord = countries.forEach((country, index, arra) => {
  arra[index] = country.charAt(0).toUpperCase() + country.substring(1);
});
console.log(countries);
