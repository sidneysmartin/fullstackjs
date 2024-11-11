"use strict";

// Iterate over "array1" & log the values using for of loop.

const array1 = ["a", "b", "c"];

const iterateArray = (array) => {
  for (const value of array) {
    console.log(value);
  }
};
iterateArray(array1);