"use strict";

/* 
TABLE OF CONTENTS:
#DOM Variables
#Buttons
*/

/* ##################### #DOM Variables ######################### */
const btnAboutMe = document.querySelectorAll(".btn__aboutme");

/* ##################### #Buttons ######################### */
btnAboutMe.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
  });
});
