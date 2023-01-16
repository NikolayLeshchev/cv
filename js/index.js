const iconMenu = document.querySelector(".header-menu-icon");

const menu = document.querySelector(".header-menu-navigation");
const menuLinks = document.querySelectorAll(".header-list-item-link");

iconMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("_active");
  menu.classList.toggle("_active");
  document.body.style.overflow = "hidden";
});
menu.addEventListener("click", function () {
  if (iconMenu.classList.contains("_active")) {
    iconMenu.classList.remove("_active");
    menu.classList.remove("_active");
    document.body.style.overflow = "";
  }
});

let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");
const sliderImg = document.querySelector(".slider-img");
// const sliderCount = document.querySelectorAll(".slider-img");

sliderNext.addEventListener("click", function () {
  offset = offset + sliderImg.clientWidth;
  if (offset > sliderImg.clientWidth * 3) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
sliderPrev.addEventListener("click", function () {
  offset = offset - sliderImg.clientWidth;
  if (offset < 0) {
    offset = sliderImg.clientWidth * 3;
  }
  sliderLine.style.left = -offset + "px";
});
