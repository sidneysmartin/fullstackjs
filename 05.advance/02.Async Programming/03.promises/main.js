// Promise
// A Promise is an object representing the eventual completion or failure of an asynchronous operation
// It is used to handle asynchronous operations in a more structured and predictable way
// Has three states: pending, fulfilled/resolved, rejected

/*
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`The number ${number} is even`);
    } else {
      reject(`The number ${number} is odd`); // Error
    }
  });
}

// const numberToCheck = 5;// odd - Error
const numberToCheck = 4; // even - Success

checkNumber(numberToCheck)
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

*/

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) Function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Data`;
      console.log("Inside (firstFunc) Function"); // Exibe uma mensagem indicando a execução da função
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function."); // Exibe uma mensagem indicando a execução da função
      resolve(processedData);
    }, 2000);
  });
}

fetchData()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) => {
    console.log(
      `Final result of all functions with Promises: ${processedData2}`
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });
