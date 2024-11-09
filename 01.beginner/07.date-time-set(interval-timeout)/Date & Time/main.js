"use strict";
// In JavaScript, you can work with dates using the built-in Date object.
// The Date object allows you to create, manipulate, and format dates and times.

// Creating a Date Object:
// -> You can create a new Date object by calling the Date constructor with or without arguments.
// If no arguments are provided, it will create a Date object representing the current date and time.

// ------------------------------------
// Create a Date object representing the current date and time
const dateCurrent = new Date();

console.log(dateCurrent); // Output: Date object
// year, month, day, hours, minutes, seconds, milliseconds
const year = dateCurrent.getFullYear();
const month = dateCurrent.getMonth() + 1; // month starts from 0 (0 = January) and finishes at 11 (11 = December) for default
const day = dateCurrent.getDate(); // day starts from 1
const hour = dateCurrent.getHours(); // hour starts from 0 (0 = 12 AM) and finishes at 23 (23 = 11 PM) for default
const minutes = dateCurrent.getMinutes();
const seconds = dateCurrent.getSeconds();
console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hours:${hour}`);
console.log(`minutes: ${minutes}`);
console.log(`seconds: ${seconds}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}`);

// ------------------------------------
// Converting a Date object to a string
console.log(dateCurrent.toDateString());
//  toISOString() -> returns a string representation of the date in the ISO 8601 format
console.log(dateCurrent.toISOString());
// toLocaleString() -> returns a string representation of the date in the locale-specific format
console.log(dateCurrent.toLocaleString());
// toLocaleString() -> returns a string representation of the date in the locale-specific format
console.log(dateCurrent.toLocaleString("pt-BR"));
