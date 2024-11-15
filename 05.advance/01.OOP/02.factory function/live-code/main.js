// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return `My name is ${this.firstName} ${this.lastName} & I a developer.`;
//   },
// };
// let anotherUser = {
//   firstName: "Alice",
//   lastName: "Smith",
//   fullName: function () {
//     return `My name is ${this.firstName} ${this.lastName} & I a Designer.`;
//   },
// };

function createUser(firstName, lastName, ...abilities) {
  return {
    firstName: firstName,
    lastName: lastName,
    abilities: abilities,
    fullName: function () {
      return `My name is ${this.firstName} ${this.lastName}, and I am a ${this.abilities}.`;
    },
  };
}
let user = createUser("John", "Doe", "Full Stack Developer");
let anotherUser = createUser("Alice", "Smith", "UI & UX Designer");
console.log(user.fullName());
console.log(anotherUser.fullName());
