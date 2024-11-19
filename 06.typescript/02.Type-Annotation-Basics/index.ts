// Annotations
/*
Annotations are used to specify the data type of a variable, parameter,;
function return CSSMathValue, and other types of values.
Annotations help developers catch erros early in development by allowing to specify what types of values can be
assigned to a given variable or passed as an argument to a function.
*/
// let myuVar: type = value

// String
let myName: string = "John Smith";
myName = "Alex Conner";
console.log(myName);

// Number
let favNumber: number = 9;
let favNumber2: number = 10;
console.log(favNumber + favNumber2);
favNumber += 2;
console.log(favNumber);

// Boolean
let tsHard: boolean = false;
console.log(tsHard);

// Type Assignment or Inference

// Implicit is the default
let favMovie = "Captain America The Winter Soldier"; // Inferred as string
console.log(favMovie);

// Explicit
let favMovie2: string = "The Lord of the Rings The Two Towers"; // Explicitly set as string
console.log(favMovie2);
