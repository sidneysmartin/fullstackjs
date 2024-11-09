"use strict";
/*
setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.
  */
// -------------------------------
// setInterval:
// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval.
//  It takes two arguments: the function or code to be executed and the time interval(in milliseconds) between each execution.

/*
 
*/

// Example:
// -------------------------------
setInterval(() => {
  console.log("This function will be executed every 2 seconds - setInterval");
}, 2000);

// setTimeout:
// -> The setTimeout function is used to execute a function or a block of code after a specified delay.
//It takes two arguments: the function or code to be executed and the time delay(in milliseconds) before the execution.

// Example:
// -------------------------------

// The setInterval function will continue to execute the specified code at the specified interval until it is stopped using the clearInterval function.

// Example:
setTimeout(() => {
  console.log("This function will be executed after 5 seconds - setTimeout");
}, 5000);

// The clearInterval() method stops the executions of the function specified in the setInterval() method

const intervalId = setInterval(() => {
  console.log("This function will be executed every 2 seconds - setInterval");
}, 2000);
clearInterval(intervalId);

// stop the execution after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds");
}, 10000);
