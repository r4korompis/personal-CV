const humburgerMenuInput = document.querySelector(".humburger-menu input");
const slide = document.querySelector(".slide");
const link = document.querySelectorAll(".slide li");
const container = document.querySelector(".container");

humburgerMenuInput.addEventListener("click", function () {
  slide.classList.toggle("slide-open");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    slide.classList.toggle("slide-open");
    humburgerMenuInput.checked = false;
  });
});

container.addEventListener("click", function () {
  if (humburgerMenuInput.checked == true) {
    slide.classList.toggle("slide-open");
    humburgerMenuInput.checked = false;
  }
});
