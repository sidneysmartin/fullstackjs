// Notation
const numbers: number[] = [1, 2, 3];
console.log(numbers);
const strings: string[] = ["a", "b", "c"];
strings.push("d");
console.log(strings);
const objects: object[] = [{ name: "John" }, { name: "Jane" }];
console.log(objects);

const users: readonly { name: string }[] = [{ name: "John" }, { name: "Jane" }];
// users.push({ name: "Jack" });// Error: Property 'push' does not exist on type 'readonly { name: string; }[]'.
console.log(users);

// Matrix
const singleArray: number[] = [1, 2, 3];
const multiArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
const tripleArray: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

// console.table(singleArray);
// console.table(multiArray);
// console.table(tripleArray);

console.log(singleArray);
console.log(multiArray);
console.log(tripleArray);
