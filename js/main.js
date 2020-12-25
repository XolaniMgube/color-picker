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

let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let selectedTotal = document.querySelector(".selected-total");
let total = 0;
let colorImage = document.querySelectorAll(".color-image");
let chosenColor = document.querySelector(".chosen-color");
let agree = document.querySelector(".agree");
let checkout = document.querySelector(".checkout");
let details = document.querySelector(".details");

let plusMinus = () => {
  for (let i = 0; i < colorImage.length; i++) {
    colorImage[i].addEventListener('click', () => {
      chosenColor.innerText = colorImage[i].classList[1].toUpperCase();
    });
  }

  plus.addEventListener('click', () => {
    total++;
    selectedTotal.innerText = total;
  });

  minus.addEventListener('click', () => {
    total <= 0 ? total = 0 : total--
    selectedTotal.innerText = total;
  });
}


let agreeFunc = () => {
  agree.addEventListener('click', () => {
    let customFit = document.querySelector(".badge");
    customFit.innerText = total;
    document.querySelector(".add-to-cart").style.display = "none";
    document.querySelector(".checkout").style.display = "block";
  });
}


let checkoutFunc = () => {
  checkout.addEventListener('click', () => {
    let checkoutColor = chosenColor.innerText.toLowerCase();
    for (let x = 0; x < total; x++) {
      details.innerHTML += ` <div class="col-md-1 col-sm-1 col-2">
        <img src="./images/${checkoutColor}.png" class="color-image ${checkoutColor}" onclick="targetColorCircles(event)">
      </div>`;
    }
    checkout.style.display = 'none';
  });
}

let functionCalls = () => {
  plusMinus()
  agreeFunc()
  checkoutFunc()
}

functionCalls()




// function addMinus() {
//   let minus = document.querySelector(".minus");
//   let plus = document.querySelector(".plus");
//   let selectedTotal = document.querySelector(".selected-total");
//   let total = 0;
//   let colorImage = document.querySelectorAll(".color-image");
//   let chosenColor = document.querySelector(".chosen-color");
//   let agree = document.querySelector(".agree");

  

//   for (let i = 0; i < colorImage.length; i++) {
//     colorImage[i].addEventListener("click", () => {
//       chosenColor.innerText = colorImage[i].classList[1].toUpperCase();
//     });
//   }

//   plus.addEventListener("click", () => {
//     total = total + 1;
//     selectedTotal.innerText = total;
//   });

//   minus.addEventListener("click", () => {
//     if (total == 0) {
//       total = 0;
//     } else {
//       total = total - 1;
//     }
//     selectedTotal.innerText = total;
//   });

//   agree.addEventListener("click", () => {
//     let customFit = document.querySelector(".badge");
//     customFit.innerText = total;
//     document.querySelector(".add-to-cart").style.display = "none";
//     document.querySelector(".checkout").style.display = "block";

//     // console.log(customFit)
//   });

//   let checkout = document.querySelector(".checkout");
//   let details = document.querySelector(".details");
//   checkout.addEventListener("click", () => {
//     let checkoutColor = chosenColor.innerText.toLowerCase();
//     for (let x = 0; x < total; x++) {
//       details.innerHTML += ` <div class="col-md-1 col-sm-1 col-2">
//         <img src="./images/${checkoutColor}.png" class="color-image ${checkoutColor}" onclick="targetColorCircles(event)">
//       </div>`;
//     }
//   });
// }

// addMinus();
