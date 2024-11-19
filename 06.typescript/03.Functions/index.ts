//Regular Functions
function addOne(num: number): number {
  return num + 1;
}

// Arrow Functions Annotations

const mult = (x: number, y: number) => x * y;

console.log(addOne(8));
console.log(mult(9, 12));

// Default Parameters Value
function greet(person: string = "Stranger"): string {
  return `Hello ${person}`;
}

console.log(greet()); //Hello Stranger
console.log(greet("John Doe")); // Hello John Doe

// Return Annotations (Regular)
function double1(x: number): number {
  return x * 2;
}

const res = double1(5);
console.log(res);
// Arrow Function Return Annotations
const triple = (x: number): number => x * 3;
console.log(triple(5));

// Void Function
function logMessage(msg: string): void {
  console.log(`This is my message: ${msg}`);
}

logMessage("Welcome to Typescript");

// Never Function
function throwError(msg: string): never {
  throw new Error(msg);
}

// throwError("This is an error");

function infiniteLoop(): never {
  while (true) {}
}

// infiniteLoop();
let x: never;
const neverReturns = (): never => {
  while (true) {}
};

// x = neverReturns(); // x is of type never

 