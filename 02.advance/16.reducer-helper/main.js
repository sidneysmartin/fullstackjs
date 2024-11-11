"use strict";
// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// array.reducer(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((previous, current) => {
  console.log(`Previous : ${previous}`);
  console.log(`Current : ${current}`);
  // 0 + 1 = 1
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
  // 10 + 5 = 15
  // ...
  // 45 + 10 = 55

  return previous + current;
}, 0);

console.log(sum);

const people = [
  {
    name: "HuXn WebDev",
    age: 18,
  },
  {
    name: "Alex Mead",
    age: 29,
  },
  {
    name: "Brain Griffin",
    age: 40,
  },
];

const oldestAge = people.reduce((previous, current) => {
  return previous.age > current.age ? previous : current;
}, people[0]);

console.log(oldestAge);

const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
},{});
console.log(wordFrequency);
