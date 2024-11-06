"use string";
const stringPI = "3.14159265";
const numEuler = 2.71828;

const typeConversion =
  "JavaScript variables can be converted to a new variable and another data type";
console.log(typeConversion);
// Converting Strings to Numbers
const numberPI = Number(stringPI);
console.log(`Converting Strings typeof ${stringPI} = ${typeof stringPI}`);
console.log(`Converting Strings typeof ${numberPI} = ${typeof numberPI}`);
// Converting Numbers to Strings
const stringEuler = String(numEuler);
console.log(`Converting Numbers typeof ${numEuler} = ${typeof numEuler}`);
console.log(`Converting Numbers typeof ${stringEuler} = ${typeof stringEuler}`);
// Converting Dates to Numbers
let date = new Date();
let convertedDate = date.getTime();
console.log(
  `Total de milissegundos desde 1 de janeiro de 1970 - ${convertedDate}`
); // Output: número de milissegundos desde 1 de janeiro de 1970
console.log(typeof convertedDate); // Output: number

// Converting Numbers to Dates
let timestamp = 1609459200000; // Representa 1 de janeiro de 2021
let convertedDateUT = new Date(timestamp);
console.log(convertedDateUT); // Output: Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(typeof convertedDateUT); // Output: object

// Converting Booleans to Numbers
let booleanValue = true;
let convertedNumber = Number(booleanValue); // ou use: let convertedNumber = +booleanValue;
console.log(convertedNumber); // Output: 1 (true é convertido para 1, false é convertido para 0)
console.log(typeof convertedNumber); // Output: number

// Converting Numbers to Booleans
let numberValue = 1; // qualquer número diferente de 0 é convertido para true
let convertedBoolean = Boolean(numberValue);
console.log(convertedBoolean); // Output: true
console.log(typeof convertedBoolean); // Output: boolean
