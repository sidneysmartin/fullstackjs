// Enhanced object literals, introduced in ECMAScript 6 (ES6),
// are a set of enhancements to the syntax for defining objects in JavaScript.
// These enhancements make it more convenient and concise to define object properties and methods;

const user = (name, age, work) => {
  return {
    name: name,
    age: age,
    work: work,
    intro: function () {
      console.log(`My name is ${this.name} and I am ${this.age} years old`);
    },
  };
};

const result1 = user("John Doe", 30, "Developer");
const result2 = user("Alex Smith", 10, "Admin");
console.log(result1);
console.log(result2);
