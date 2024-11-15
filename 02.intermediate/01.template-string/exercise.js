"use strict";
// 1. Store this in template string ~
// The quick brown fox jumps over the lazy dog

// 2. Create two variables (firstName, lastName)
// 3. Use that variables in template string.

const myString = `The quick brown fox jumps over the lazy dog`;

const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(myString);
console.log(`Welcome ${fullName}`);
