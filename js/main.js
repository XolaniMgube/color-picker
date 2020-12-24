/** @format */

"use strict";

function targetColorCircles(event) {
  let target = event.currentTarget;
  let colorImage = document.querySelectorAll(".color-image");
  let currentColor = document.querySelector(".current-color");

  for (let i = 0; i < colorImage.length; i++) {
    if (colorImage[i] == target) {
      colorImage[i].classList.toggle("toggle-border");
      currentColor.innerText = target.classList[1].toUpperCase();
    } else if (colorImage[i] != target) {
      colorImage[i].classList.remove("toggle-border");
    }
  }
}

function addMinus() {
  let minus = document.querySelector(".minus");
  let plus = document.querySelector(".plus");
  let selectedTotal = document.querySelector(".selected-total");
  let total = 0;
  let colorImage = document.querySelectorAll(".color-image");
  let chosenColor = document.querySelector(".chosen-color");
  let agree = document.querySelector('.agree')
  let modal = document.querySelector(".modal");

  for (let i = 0; i < colorImage.length; i++) {
    colorImage[i].addEventListener("click", () => {
      chosenColor.innerText = colorImage[i].classList[1].toUpperCase();
    });
  }

  plus.addEventListener("click", () => {
    total = total + 1;
    selectedTotal.innerText = total;
  });

  minus.addEventListener("click", () => {
    if (total == 0) {
      total = 0;
    } else {
      total = total - 1;
    }
    selectedTotal.innerText = total;
  });

  agree.addEventListener('click', () => {
    let customFit = document.querySelector('.badge')
    customFit.innerText = total
    document.querySelector('.add-to-cart').style.display = "none"
    document.querySelector('.checkout').style.display = "block"

    // console.log(customFit)
  })

  
}

addMinus();
