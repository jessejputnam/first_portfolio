"use strict";

/* 
TABLE OF CONTENTS:
#DOM Variables
#Buttons
*/

/* ##################### #DOM Variables ######################### */
const btnAboutMe = document.querySelector(".btn__aboutme");

/* ##################### #Buttons ######################### */
btnAboutMe.addEventListener("click", () => {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});
