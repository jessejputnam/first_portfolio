"use strict";

const mobileMenuToggle = document.querySelector(
  ".header__mobile__links__toggle"
);
const mobileModalLinks = document.querySelector(".header__mobile-links__modal");

mobileMenuToggle.addEventListener("click", () => {
  mobileModalLinks.classList.toggle("fade-in");

  if (mobileMenuToggle.src.match("hamburger")) {
    mobileMenuToggle.src = "images/icons/close.svg";
    mobileMenuToggle.style.marginRight = "4px";
  } else {
    mobileMenuToggle.src = "images/icons/hamburger.svg";
    mobileMenuToggle.style.marginRight = "0";
  }
});