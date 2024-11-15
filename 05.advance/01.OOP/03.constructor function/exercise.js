// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  };
}

const person1 = new Person("John Doe", 30, "male");
const person2 = new Person("Jane Doe", 25, "female");

person1.info();
person2.info();

// *************** EXERCISE 2
// In this exercise, you will create a constructor function called Car that represents a
// car with specific properties such as make, model, year, and color.Additionally, you will define two methods, start and stop,
// to simulate starting and stopping the car.

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like
// "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like
// "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages
//  display the correct make and model of the cars.;

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `Starting the ${this.make} ${this.model}...`;
  };
  this.stop = function () {
    return `Stopping the ${this.make} ${this.model}.`;
  };
}

const car1 = new Car("Toyota", "Camry", 2022, "black");
const car2 = new Car("Honda", "CR-V", 2021, "white");

console.log(car1.start());
console.log(car1.stop());
console.log(car2.start());
console.log(car2.stop());
