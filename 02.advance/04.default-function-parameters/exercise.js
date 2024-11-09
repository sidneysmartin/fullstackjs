// ---------------------------
// 1. Create a function name (append) it will take 2 parameters (value, array)
// 2. The default value of parameter "array" will be [].

// ----------------------------
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value
// 2. Provide 1 as the default value to parameter "b"

function append(value, array = []) {
  array.push(value);
  return array;
}

function multiply(a, b = 1) {
  return a * b;
}

console.log(append(8)); // [8]
console.log(append(1, [1, 2, 3, 5])); // [1, 2, 3, 5,1]

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(2)); // 2
console.log(multiply(3)); // 3
console.log(multiply(2, 3)); // 6
console.log(multiply(6, 8)); // 48
