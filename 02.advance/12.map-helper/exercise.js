"use strict";

// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

// Função para criar um array com 5 números aleatórios

function iterateArray() {
  const randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return randomNumbers;
}

// Cria o array de números aleatórios
let myArray = iterateArray();

// Mapeia sobre o array e multiplica cada item por 10
const multTenArray = myArray.map((number) => {
  return number * 10;
});

// Exibe os resultados
console.log("Array Original:", myArray);
console.log("Array Multiplicado por 10:", multTenArray);
