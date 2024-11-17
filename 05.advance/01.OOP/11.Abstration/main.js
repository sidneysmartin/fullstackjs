class Animal {
  constructor(name) {
    this.name = name;
  }
  // Abstract class (providing a blueprint for subclasses)
  makeSound() {
    throw new Error("Method (makeSound) must be implemented");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  // Implementing hte abstract method
  makeSound() {
    return "Woof woof";
  }
}

// Concrete Subclass
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  // Implementing hte abstract method
  makeSound() {
    return "Meow meow";
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(dog.name); // Buddy
console.log(dog.makeSound()); // Woof woof
console.log(cat.name); // Whiskers
console.log(cat.makeSound()); // Meow meow

// ---------- Define
// In this example, we have an abstract class Animal that contains an abstract method makeSound().
// The makeSound() method is declared in the Animal class but doesn't provide an implementation.
// It's meant to be implemented by subclasses like Dog and Cat.

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class.
// They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement,
// while hiding the internal details of how each animal makes its sound.
// This simplifies the code and allows us to work with animals at a higher level of abstraction,
//  without worrying about the specifics of each animal's sound implementation;;;
