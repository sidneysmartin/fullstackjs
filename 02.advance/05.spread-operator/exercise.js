"use strict";

// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------
// spread operator doing the concat job

const arr = [1, 2, 3];
const arr2 = [5, 7];

const arr3 = [...arr, ...arr2];
console.log(arr3);

const user = {
  name: "Sarah Palmer",
  age: 22,
};
const clone = { ...user, work: "Model" };
console.log(clone);
