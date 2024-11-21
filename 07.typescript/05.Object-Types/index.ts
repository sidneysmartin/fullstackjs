// type varName(annotations/type) = {property:value}

/*
const person: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

*/

// //------------
// function printUser(): { name: string; age: number; location: string } {
//   return { name: "Tom", age: 20, location: "New York" };
// }

// const res = printUser();
// console.log(res);

// Type Aliases
/*
type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const result = printUserInfo({ name: "Alex", age: 20, location: "Bahamas" });
console.log(result);

*/

// Optional Properties
/*
type User = {
  name: string;
  age?: number; // Optional
  location: string;
};

const user: User = {
  name: "Zack",
  age: 31,
  location: "Canada",
};
const user2: User = {
  name: "John",
  location: "USA",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
console.log(`Name: ${user2.name}, Location: ${user2.location}`);
*/

// Readonly Properties
/*
type Person = {
  name: string;
  age: number;
  readonly email: string;
};

const user: Person = {
  name: "John",
  age: 20,
  email: "test@gmail.com",
};

console.log(user.email); // Valid
// user.email = "john@gmail.com" // 🚫 Not Valid
*/

// Intersection Types
type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const john: User = {
  first: "John",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strong-password123",
};

console.log(
  `Name: (${john.first} ${john.last}) Age: (${john.age}) Email: (${john.email}) Password: (${john.password})`
);
