"use strict";
let count = 0;
const maxCont = 10;
function executeTimeOut() {
  if (count < maxCont) {
    console.log(`Timeout execution ${count + 1}`);
    count++;
    setTimeout(executeTimeOut, 1000); // call the function  after 1 second
  }
}

executeTimeOut();

const intervalId = setInterval(() => {
  console.log(`Interval execution ${count + 1}`);
  count++;
  if (count >= maxCont) {
    clearInterval(intervalId); // stop the execution when count is greater than or equal to maxCont
  }
}, 1000); // call the function  after 1 second
