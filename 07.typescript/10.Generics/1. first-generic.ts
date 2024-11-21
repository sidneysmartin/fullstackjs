// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Using Generics ---------------

function printInfo<T>(arg: T): T {
  console.log(arg);
  return arg;
}
const str = printInfo<string>("Hello");
const num = printInfo<number>(123);
const bool = printInfo<boolean>(true);

console.log(str);
console.log(num);
console.log(bool);

// ----------------- Exemple -------------------
function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

const num1 = uniqueDataTypesFunc<number>(10, 20);
const str1 = uniqueDataTypesFunc<string>("hello", "world");
const bool1 = uniqueDataTypesFunc<boolean>(true, false);

console.log(num1);
console.log(str1);
console.log(bool1);

// Example usage interface with a custom type

interface Dog {
  name: string;
  breed: string;
}

const dog = uniqueDataTypesFunc<Dog>(
  { name: "Bob", breed: "pug" },
  { name: "Thor", breed: "pitbull" }
);

console.log(dog);
