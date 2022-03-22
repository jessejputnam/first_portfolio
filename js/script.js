"use strict";

/* 
TABLE OF CONTENTS:
#DOM Variables
*/

//! ADD LAZY LOAD FUNCTIONALITY TO IMAGES (SEE 13-ADVANCED-DOM-BANKIST FOR HOW)

/* ##################### #DOM Variables ######################### */
const mobileMenuToggle = document.querySelector(
  ".header__mobile__links__toggle"
);
const mobileModalLinks = document.querySelector(".header__mobile-links__modal");
const allSections = document.querySelectorAll(".section");

/* ################### #Mobile Menu Modal ###################### */
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

// Reveal Sections on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
