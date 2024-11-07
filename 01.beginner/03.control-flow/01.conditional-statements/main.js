"use strict";

// if (condition) {...}
// else if (condition_2) {...}
// else {...}
// ------------------------

// https://youtu.be/H3XIJYEPdus?list=PLSDeUiTMfxW4zCLgOQgz4PWSN0QRmUUFR&t=6853

let age = 15;
if (age < 16) {
  console.log("Não pode votar");
} else if ((age >= 16 && age < 18) || age > 70) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}

let a = 15;
let b = 22;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${a} is less than ${b}`);
} else {
  console.log(`${a} is equal ${b}`);
}

let hour = 22;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}
