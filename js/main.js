/** @format */

"use strict";

function targetColorCircles(event) {
  let target = event.currentTarget;
  let colorImage = document.querySelectorAll(".color-image");
  let currentColor = document.querySelector(".current-color");
  
  for (let i = 0; i < colorImage.length; i++) {
    if (colorImage[i] == target) {
      colorImage[i].classList.toggle("toggle-border");
      currentColor.innerText = target.classList[1].toUpperCase()
    } else if (colorImage[i] != target) {
      colorImage[i].classList.remove("toggle-border");
    }
  }
}
