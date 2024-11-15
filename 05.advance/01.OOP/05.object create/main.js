const user = {
  greet: function () {
    console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old.`);
  },
};

const user1 = Object.create(user);
user1.name = "John";
user1.age = 30;
user1.greet();

const user2 = Object.create({
  firstName: {value: "Jane"},
  lastName: {value: "Doe"},
  greet: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} & I'm ${this.age} years old.`
    );
  },
})

user2.greet();