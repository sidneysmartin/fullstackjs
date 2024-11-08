"use strict";
// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherArray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["singer1", "singer2", "singer3"];
console.log(favSingers[0]); // singer1
const favNumbers = [9, 7, 23, 48];
const mixedArr = ["string", ["otherArray"], 123, true];
console.log(mixedArr[0]); // string
console.log(mixedArr[1][0]); // otherArray
console.log(mixedArr[2]); // 123
console.log(mixedArr[3]); // true
