// Getting elements from the DOM

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// Attach Events
ratingsContainer.addEventListener("click", (event) => {
  if (event.target.parentNode.classList.contains("rating")) {
    console.log(event.target.parentNode.classList.contains("rating"));
    removeActive();
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <p class="heart">💖</p>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <br>
  <a href="javascript:location.reload(true)">Refresh this page</a>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
