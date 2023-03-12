const humburger = document.querySelector(".humburger-menu span");
const nav = document.querySelector(".nav-box");
// const closeIcon = document.getElementById("close-icon");
const humburgerMenu = () => {
  nav.classList.toggle("toggle");
  humburger.classList.toggle("fixed");
  // closeIcon.setAttribute("src", "assets/icons/close-icon.svg");
};
humburger.addEventListener("click", humburgerMenu);
