// console.log(window);
// console.log(this);// window

// ---------------------------------

// console.log(this === window);
// window.language = "JavaScript OOP";
// this.superset = "TypeScript";
// console.log(window);

// ---------------------------------
function printThis() {
  return this; // window
}

// const res = printThis();
// console.log(res);

// const obj = {
//   name: "John",
//   lastName: "Doe",
//   fullName: function () {
//     // return this; // "owner" obj
//     return `Full name ${this.name} ${this.lastName}`;
//   },
// };
// const show = obj.fullName();
// console.log(show);

// ---------------------------------
const obj = {
  name: "John",
  lastName: "Doe",
  // when we use arrow function we don't need to use "this"
  fullName: () => {
    return `Full name ${this.name} ${this.lastName}`;
  },
};
const show = obj.fullName();
console.log(show);

const myMethod = () => {
  console.log(this);
};

const myObject = {};
