"use strict";
// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category != "Books") {
//     allProductsBooks = false;
//   } else {
//     someProductsBooks = true;
//   }
// }

const allProductsBooks = products.every(
  (product) => product.category === "Books"
);
const someProductsBooks = products.some(
  (product) => product.category === "Books"
);

console.log(allProductsBooks);
console.log(someProductsBooks);
