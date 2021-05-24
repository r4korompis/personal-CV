const humburger = document.querySelector(".humburger-menu");
const icon = document.querySelector(".humburger-menu .fas");
const slide = document.querySelector(".slide");
const link = document.querySelectorAll(".slide li");
const container = document.querySelector(".container");
const closeIcon = document.querySelector(".closeIcon");
const myAlert = document.querySelector(".myalert");

function humburgerMenu() {
  slide.classList.toggle("toggle");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

humburger.addEventListener("click", humburgerMenu);

closeIcon.addEventListener("click", function() {
  myAlert.classList.toggle("none");
});
