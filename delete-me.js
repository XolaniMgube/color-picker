/** @format */

function calc(originalPrice) {
  let percentage = (75 / 100) * originalPrice;
  return parseFloat(percentage).toFixed(2);
}

console.log(calc(45.99));
