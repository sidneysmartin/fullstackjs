// Getting the elements of the DOM
const sidebar = document.querySelector(".sidebar");
const center = document.querySelector(".center");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});
