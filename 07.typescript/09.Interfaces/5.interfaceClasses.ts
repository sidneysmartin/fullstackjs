// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  start(): void {
    console.log("Car started");
  }
  stop(): void {
    console.log("Car stopped");
  }
}

// Usage
const myCar = new Car();
myCar.start();
myCar.stop();
