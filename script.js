const humburgerMenu = document.querySelector(".humburger-menu input");
const slide = document.querySelector(".slide");

humburgerMenu.addEventListener("click", function () {
  slide.classList.toggle("slide-open");
});
