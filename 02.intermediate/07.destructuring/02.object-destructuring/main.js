"use strict";
// In object destructuring order doesn't matter but the name does matter

// --------------------------
// Extracting a property

const student = {
  name: "Bill",
  position: "Second",
  rollNo: 10,
};
const { name, position, rollNo } = student;
console.log(name);
console.log(position);
console.log(rollNo);
