// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// ES6 code
const a = 1;
const b = 2;
const c = 3;

const obj = { a, b, c };

console.log(obj);

// -------------------------------
// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

function getPersonES6(name, age, height) {
  return { name, age, height };
}
const result = getPersonES6("John", 30, 180);
console.log(result);

// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

//ES6
const lib = {
  // sum: (a, b) => {
  //   return a + b;
  // },
  // mult: (a, b) => {
  //   return a * b;
  // },

  // simplified
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(8, 6));
console.log(lib.mult(7, 5));
