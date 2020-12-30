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
const targetColorCircles = (event) => {
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

// Increment
const increment = () => {
  let incrementBtn = document.querySelector(".increment");
  incrementBtn.addEventListener("click", () => {
    modalQuantity.innerText++;
  });
};

// Decrement
const decrement = () => {
  let decrementBtn = document.querySelector(".decrement");
  decrementBtn.addEventListener("click", () => {
    modalQuantity.innerText <= 0
      ? (modalQuantity.innerText = 0)
      : modalQuantity.innerText--;
  });
};

const addDetailsCircles = () => {
  let checkoutColor = currentColor[0].innerText.toLowerCase();
  let details = document.querySelector(".details");

  for (let x = 0; x < modalQuantity.innerText; x++) {
    details.innerHTML += ` <div class="col-md-1 col-sm-1 col-2"> 
        <img src="./images/${checkoutColor}.png" class="details-circles ${checkoutColor}">
      </div>`; // Adding circles to the details section
  }
};

const toggleButtons = () => {
  let customFitQuantity = document.querySelector(".badge");
  let detailsLength = document.querySelectorAll(".details-circles").length;
  customFitQuantity.innerText = detailsLength;
  addToCartBtn.style.display = "none";
  checkoutBtn.style.display = "block";
};

const addToSummaryTable = () => {
  let checkoutColor = currentColor[0].innerText.toLowerCase();
  let modalTable = document.querySelector("#summary-modal tbody");

  modalTable.innerHTML += `<tr>
      <td><img src="./images/${checkoutColor}.png" style="width: 20px;"></td>
      <td>${checkoutColor}</td>
      <td>R10</td>
    </tr>`;
};

// Event listener for the Agree Button
let agreeFunc = () => {
  agreeBtn.addEventListener("click", () => {
    addDetailsCircles();
    toggleButtons();
    addToSummaryTable();
    modalQuantity.innerText = total;
  });
};


let functionCalls = () => {
  increment();
  decrement();
  agreeFunc();
  checkoutFunc();
};

functionCalls();
