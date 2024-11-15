// create a factory function that generates different types of vehicles.
// Each vehicle object should have properties like type, brand, model, and year.

// Create a factory function for vehicles

function createVehicle(...characteristics) {
  return {
    type: characteristics[0],
    brand: characteristics[1],
    model: characteristics[2],
    year: characteristics[3],
  };
  info: () => {
    console.log(
      `Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    );
  };
}

let fiat = createVehicle("Car", "Fiat", "Fastback", 2025);
let honda = createVehicle("car", "Honda", "Civic Type R", 2025);
let renault = createVehicle("Truck", "Volvo", "FH", 2007);
let embraer = createVehicle("Plane", "Embraer", "ERJ 190", 2007);

console.log(fiat);
console.log(honda);
console.log(renault);
console.log(embraer);