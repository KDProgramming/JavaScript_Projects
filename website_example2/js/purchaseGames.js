"use strict";
/*
      Author: Kylie Drawdy
      Date: 11/13/2024
*/

let submitButton = document.getElementById("submitButton");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");

// prices for each product
const productPrices = {
   "Great Game": 23.23,
   "Okay Game": 52.52,
   "Basic Game": 99.59,
   "Advanced Game": 1.05,
   "Interesting Game": 11.11
};

// Function to update price based on product
function updatePrice() {
   let selectedProduct = product.value;
   let productPrice = productPrices[selectedProduct];
   price.value = "$" + productPrice.toFixed(2);
}

updatePrice();

product.addEventListener("change", updatePrice);

submitButton.onclick = function() {
   let itemTotal;
   itemTotal = parseInt(sessionStorage.getItem("itemsInCart") || 0) + 1;
   sessionStorage.setItem("itemsInCart", itemTotal);

   let itemText = product.value + " & ";
   let priceValue = parseFloat(price.value.replace('$', '').trim());
   itemText += priceValue + " & ";
   itemText += quantity.value + " & ";
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
}