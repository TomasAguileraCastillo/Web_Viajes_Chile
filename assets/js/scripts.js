/* Funcion para opacar nav al bajar */

var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-info", "shadow");
  } else {
    nav.classList.remove("bg-info", "shadow");
  }
});
