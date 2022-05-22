// Humburger menu
const humburger = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-box");
humburger.addEventListener("click", function () {
  nav.classList.toggle("toggle");
  humburger.classList.toggle("change-color");
  humburger.classList.toggle("fa-times");
  humburger.classList.toggle("fixed");
});

// Button scroll top
const btnScrollTop = document.getElementById("btnScrollTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}
btnScrollTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
