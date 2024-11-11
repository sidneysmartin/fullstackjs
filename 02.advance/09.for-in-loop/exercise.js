"use strict";
// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science")
//and the value represents the score.Your task is to use the "for...in" loop to calculate and print the average score of the student.;

// Testing the function with the example test scores object
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

function calcAvgScores(obj) {
  let sum = sumScores(obj);
  return sum / Object.keys(obj).length;
}
function sumScores(obj) {
  let sum = 0;
  for (const property in obj) {
    sum += obj[property];
  }
  return sum;
}

console.log(
  `Average score: ${calcAvgScores(testScores)}\nSum score: ${sumScores(
    testScores
  )}`
);
