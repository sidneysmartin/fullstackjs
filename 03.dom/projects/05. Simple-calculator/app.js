document.getElementById("btn").addEventListener("click", () => {
  // Get Elements from the DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let operator = document.querySelector("#selectOp").value;
  let result = document.querySelector(".result");

  // Basic Math Operations

  switch (operator) {
    case "plus":
      // result.innerHTML = Number(num1) + Number(num2);
      result.innerHTML = +num1 + +num2;
      break;
    case "min":
      // result.innerHTML = Number(num1) - Number(num2);
      result.innerHTML = +num1 - +num2;
      break;
    case "dev":
      // result.innerHTML = Number(num1) / Number(num2);
      result.innerHTML = +num1 / +num2;
      break;
    case "multi":
      // result.innerHTML = Number(num1) * Number(num2);
      result.innerHTML = +num1 * +num2;
      break;
  }
});
