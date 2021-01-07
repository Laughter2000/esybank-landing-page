const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const intro = document.querySelector(".intro");

const toggleMenu = () => {
  if (!nav.classList.contains("header__nav--toggle")) {
    menu.src = "./images/icon-close.svg";
    nav.classList.add("header__nav--toggle");
    body.style.overflow = "hidden";
    intro.style.opacity = "0.6";
  } else {
    menu.src = "./images/icon-hamburger.svg";
    nav.classList.remove("header__nav--toggle");
    body.style.overflow = "initial";
    intro.style.opacity = "initial";
  }
};

menu.addEventListener("click", toggleMenu);
