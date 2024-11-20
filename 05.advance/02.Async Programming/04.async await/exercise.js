"use strict";
// Async is a special function that is designed to operate asynchronousyly, meaning that it can perform tasks in the background while other code
// continues to execute. Async functions are marked the async keyword

// --------------------------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("John")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------

// Refactoring
console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Singing", "Solving Math"]);
    }, 2000);
  });
}

// getUserDataFromDB("John")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

async function showUserHobbies() {
  try {
    const name = await getUserDataFromDB("John");
    const hobby = await getUserHobbies(name);
    console.log(hobby);
  } catch (error) {
    console.log(error);
  }
}

showUserHobbies();

console.log("End");
