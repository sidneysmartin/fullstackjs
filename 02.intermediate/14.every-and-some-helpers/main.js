"use strict";
/*
The every() and some() are two built-in array methods in JavaScript that allow
you to check the elements of an array based on a given condition.Both methods take a callback function as an argument,
which is applied to each element of the array.

The every() method tests whether all elements in the array pass the condition specified by the provided callback function.,
It returns true if the callback function returns true for every element, and false if any element fails the condition.

The some() method tests whether at least one element in the array passes the condition specified by the provided callback function.
It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

resume every() - return true if all elements pass the condition
resume some() - return true if at least one element passes the condition
*/
const people = ["Mike", "Alex", "John", "Bob", "Jordan"];
const res1 = people.every((p) => p.length === 4);
const res2 = people.some((p) => p.length <= 3);
console.log(res1);
console.log(res2);
