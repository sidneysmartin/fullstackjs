"use strict";

// Esta função simula um "callback hell" utilizando setTimeout
function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callbackHell) Function";
    console.log(data); // Exibe uma mensagem indicando a execução da função
    callback(data); // Chama o callback passando 'data' como argumento
  }, 2000);
}

// Esta função processa os dados recebidos e chama um callback
function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log("Inside (firstFunc) Function"); // Exibe uma mensagem indicando a execução da função
    callback(processedData); // Chama o callback passando 'processedData' como argumento
  }, 1000);
}

// Esta função processa os dados recebidos e chama um callback
function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed Second`;
    console.log("Inside (secondFunc) Function."); // Exibe uma mensagem indicando a execução da função
    callback(processedData); // Chama o callback passando 'processedData' como argumento
  }, 1500);
}

// Callback Hell: Chama a função 'callbackHell' e então encadeia chamadas de callbacks
callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final result of all functions: ${processedData2}`);
      // Exibe o resultado final após todas as funções terem sido executadas
    });
  });
});

// ********* Example 2
// Callback nem sempre é assíncrono

console.log("Start"); // Primeiro: Exibe "Start"

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((r) => {
  console.log(r); // Segundo: Exibe cada número do array
});

console.log("End"); // Terceiro: Exibe "End"
