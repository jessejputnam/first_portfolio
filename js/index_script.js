"use strict";

/* 
TABLE OF CONTENTS:
#DOM Variables
#Buttons
*/

/* ##################### #DOM Variables ######################### */
const btnAboutMe = document.querySelectorAll(".btn__aboutme");
const aboutMeSection = document.getElementById("about-me-scroll");
const allSections = document.querySelectorAll(".section");

/* ##################### #Buttons ######################### */
btnAboutMe.forEach((btn) => {
  btn.addEventListener("click", () => {
    const aboutMeCoords = aboutMeSection.getBoundingClientRect();
    window.scrollTo({
      left: aboutMeCoords.left + window.pageXOffset,
      top: aboutMeCoords.top + window.pageYOffset,
      behavior: "smooth",
    });
    // Does not work for iOS and IE and Safari
    // aboutMeSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal Sections
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
