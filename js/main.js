/** @format */

"use strict";

let colorImage = document.querySelectorAll(".color-image");
let currentColor = document.querySelectorAll(".current-color");
let total = 0;
let agreeBtn = document.querySelector(".agree-button");
let checkoutBtn = document.querySelector(".checkout");
let addToCartBtn = document.querySelector(".add-to-cart");
let modalQuantity = document.querySelector(".modal-quantity");

// Function that targets the clicked color circles and changes relatives labels to the name of the clicked color
let targetColorCircles = (event) => {
  let target = event.currentTarget;
  // console.log(target.getAttribute("data-price"))

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

  addToCartBtn.style.display = "block";
  checkoutBtn.style.display = "none";
};

let calcPrice = () => {
  let fullPrice = document.querySelector("#full-price");
  let specialPrice = document.querySelector("#special-price");
  for (let i = 0; i < colorImage.length; i++) {
    colorImage[i].addEventListener("click", () => {
      fullPrice.innerText = colorImage[i].getAttribute("data-price");
      let percentage = (75 / 100) * fullPrice.innerText;
      specialPrice.innerText = parseFloat(percentage).toFixed(2);
    });
  }
};
calcPrice();

// Event listeners to adding and subtracting the quantity of the color on modal
let quantityControl = () => {
  let decrement = document.querySelector(".decrement");
  let increment = document.querySelector(".increment");

  increment.addEventListener("click", () => {
    // total++;
    modalQuantity.innerText++;
  });

  decrement.addEventListener("click", () => {
    // total <= 0 ? (total = 0) : total--; // Ternary operator for quantity to not be less than zero
    modalQuantity.innerText <= 0
      ? (modalQuantity.innerText = 0)
      : modalQuantity.innerText--;
  });
};



// Event listener for the Agree Button
let agreeFunc = () => {
  agreeBtn.addEventListener("click", () => {
    addDetailsCircles();
    toggleButtons()
  });
};

let addToCart = () => {
  addToCartBtn.addEventListener("click", () => {
    modalQuantity.innerText = 0;
  });
};

addToCart();

// Event listner for the checkout button
let checkoutFunc = () => {
  checkoutBtn.addEventListener("click", () => {
    let checkoutColor = currentColor[0].innerText.toLowerCase();
    let modalTable = document.querySelector("#summary-modal tbody");

    modalTable.innerHTML += `<tr>
                  <td><img src="./images/${checkoutColor}.png" style="width: 20px;"></td>
                  <td>${checkoutColor}</td>
                  <td>R10</td>
                </tr>`;
  });
};

let functionCalls = () => {
  quantityControl();
  agreeFunc();
  checkoutFunc();
};

functionCalls();
