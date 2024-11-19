// Synchronous Code
/*
function myFunc() {
  console.log("Inside function");
}
console.log("Start");
myFunc();
console.log("End");
*/

// Asynchronous Code

function logStart() {
  console.log("Start");
}
function logInsideSetTimeout() {
  console.log("Inside SetTimeout");
  setTimeout(logEnd, 2000);
}
function logEnd() {
  console.log("End");
}

logStart();

setTimeout(logInsideSetTimeout, 2000);
