"use strict";

/* 
TABLE OF CONTENTS:
#DOM Variables
#Created Elements
#Buttons
*/

/* ############### #DOM Variables ############### */
const textInputs = document.querySelectorAll(".input__txt");
const btnSubmit = document.getElementById("submit-message");

/* ############### #Created Elements ############### */

/* ############### #Buttons ############### */
btnSubmit.addEventListener("click", () => {
  for (let i = 0; i < textInputs.length; i++) {
    if (textInputs[i].value === "") {
      textInputs[i].style.outline = "solid 2px rgb(244, 48, 48)";

      let showError = "error" + i;
      document.getElementById(showError).classList.remove("visible__hidden");
    }
  }
});

document.addEventListener("keyup", () => {
  textInputs.forEach((input) => {
    if (input.value !== "") {
      input.style.outline = "none";

      document.querySelector(`.${input.name}`).classList.add("visible__hidden");
    }
  });
});
