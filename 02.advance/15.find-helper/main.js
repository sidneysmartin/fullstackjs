"use strict";
// The find() method is another built-in array helper in JavaScript that
// allows you to find the first element in an array that matches a specific condition.
// It returns the value of the first element that satisfies the given testing function,
// or undefined if no element is found.

// ------------------------------

const peoples = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 28 },
  { name: "Charlie", age: 32 },
  { name: "David", age: 27 },
  { name: "Eva", age: 29 },
  { name: "Frank", age: 31 },
];

const res = peoples.find((person) => person.name === "Eva");
console.log(res);

const posts = [
  { id: 1, content: "Good Post" },
  { id: 1, content: "funny Post" },
  { id: 1, content: "sad Post" },
];

const postRes = posts.find((post) => post.content === "funny post");
console.log(postRes);