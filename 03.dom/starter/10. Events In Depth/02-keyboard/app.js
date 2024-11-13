// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// Keyboard Events

// onkeydown	A user presses a key
// onkeypress	A user presses a key
// onkeyup	A user releases a key

const input = document.querySelector("input");

// input.addEventListener("keypress", function () {
//   console.log("Key pressed");
// });

// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });

// input.addEventListener("keydown", function () {
//   console.log("Keydown");
// });

// ------- USEFUL PROPERTIES AND METHODS -------
input.addEventListener("keypress", (e) => {
  console.log(e.charCode);
  console.log(e.code);
  console.log(e.ctrlKey);
  console.log(e.key);
  console.log(e.shiftKey);
});
