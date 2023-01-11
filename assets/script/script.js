const humburger = document.querySelector(".humburger-menu span");
const nav = document.querySelector(".nav-box");
// const closeIcon = document.getElementById("close-icon");
const humburgerMenu = () => {
  nav.classList.toggle("toggle");
  humburger.classList.toggle("fixed");
  // closeIcon.setAttribute("src", "assets/icons/close-icon.svg");
};
humburger.addEventListener("click", humburgerMenu);

const btnScrollTop = document.getElementById("btnScrollTop");
window.onscroll = () => {
  scrollFunction();
};
const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};
btnScrollTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
