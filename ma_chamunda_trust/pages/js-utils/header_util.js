var ham = document.querySelector(".ham-menu");
var nav_items = document.querySelector(".navigation-items");
var lines = document.querySelectorAll(".lines");
ham.addEventListener("click", () => {
  nav_items.classList.toggle("active");
  ham.classList.toggle("active");
});

var menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  if (menu_icon.src.includes("/assets/hamburger.svg")) {
    menu_icon.src = "/assets/trisul.svg";
  } else {
    menu_icon.src = "/assets/hamburger.svg";
  }
});
