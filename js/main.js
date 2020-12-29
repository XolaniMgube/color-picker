/** @format */

"use strict";

let colorImage = document.querySelectorAll(".color-image");
let currentColor = document.querySelectorAll(".current-color");
let total = 0;
let agreeBtn = document.querySelector(".agree-button");
let checkoutBtn = document.querySelector(".checkout");
let addToCartBtn = document.querySelector(".add-to-cart");

// Function that targets the clicked color circles and changes relatives labels to the name of the clicked color
let targetColorCircles = (event) => {
  let target = event.currentTarget;

  for (let i = 0; i < colorImage.length; i++) {
    if (colorImage[i] == target) {
      colorImage[i].classList.toggle("toggle-border"); // Add a border to color circles
      for (let j = 0; j < currentColor.length; j++) {
        currentColor[j].innerText = target.classList[1].toUpperCase(); // Changes the value the color in the modal and COLOR:
      }
    } else if (colorImage[i] != target) {
      colorImage[i].classList.remove("toggle-border");
    }
  }
};

// Event listeners to adding and subtracting the quantity of the color on modal
let quantityControl = () => {
  let modalQuantity = document.querySelector(".modal-quantity");
  let decrement = document.querySelector(".decrement");
  let increment = document.querySelector(".increment");

  increment.addEventListener("click", () => {
    total++;
    modalQuantity.innerText = total;
  });

  decrement.addEventListener("click", () => {
    total <= 0 ? (total = 0) : total--; // Ternary operator for quantity to not be less than zero
    modalQuantity.innerText = total;
  });
};

// Event listener for the Agree Button
let agreeFunc = () => {
  agreeBtn.addEventListener("click", () => {
    let customFitQuantity = document.querySelector(".badge");
    let checkoutColor = currentColor[0].innerText.toLowerCase();
    let details = document.querySelector(".details");

    customFitQuantity.innerText = total;
    addToCartBtn.style.display = "none";
    checkoutBtn.style.display = "block";

    for (let x = 0; x < total; x++) {
      details.innerHTML += ` <div class="col-md-1 col-sm-1 col-2"> 
        <img src="./images/${checkoutColor}.png" class="color-image ${checkoutColor}">
      </div>`; // Adding circles to the details section
    }
  });
};

// Event listner for the checkout button
let checkoutFunc = () => {
  checkoutBtn.addEventListener("click", () => {
    let checkoutColor = currentColor[0].innerText.toLowerCase();
    alert(`You have purchased ${total} ${checkoutColor} circles for`);
    location.reload();
  });
};

let functionCalls = () => {
  quantityControl();
  agreeFunc();
  checkoutFunc();
};

functionCalls();
