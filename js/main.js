/** @format */

"use strict";



let colorImage = document.querySelectorAll('.color-image')
let currentColor = document.querySelector('.current-color')
// console.log(currentColor.innerText)
console.log(colorImage[1].classList[1])

// console.log(element)

for (let i = 0; i < colorImage.length; i++) {
  colorImage[i].addEventListener("click", () => {
    colorImage[i].classList.toggle("toggle-border")
    currentColor.innerText = colorImage[i].classList[1].toUpperCase()
  })
}