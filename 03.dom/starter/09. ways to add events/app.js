// ----------- BAD WAY-----------
const secondBTN = document.querySelector(".second-btn");
secondBTN.onclick = function () {
  alert("Bad way using add function in event tag");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
// can using function() or arrow function
best.addEventListener("click", function () {
  alert(
    "Great way using addEventListener\ncan using function() or arrow function"
  );
});

// ----------- Event (e) Object -----------
const paragraph = document.querySelector(".paragraph");

paragraph.addEventListener("click", (event) => {
  console.log(event);
});
