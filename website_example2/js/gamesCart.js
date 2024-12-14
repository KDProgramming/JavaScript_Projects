"use strict";
/*
      Author: Kylie Drawdy
      Date: 11/13/2024
*/
 
let cartContainer = document.getElementById("cartContainer");

window.addEventListener("load", displayCart);

function displayCart() {
   if (sessionStorage.getItem("itemsInCart")) {
      let itemTotal = sessionStorage.getItem("itemsInCart");
      let subtotal = 0;
      let taxRate = 0.11;
      let totalPrice = 0;

      let cartTable = document.createElement("table");
      cartTable.id = "cartTable";

      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>`;
      cartTable.innerHTML = tableHeader;

      for (let i = 1; i <= itemTotal; i++) {
         let cartItem = sessionStorage.getItem("cartItem" + i);
         if (cartItem) {
            let productArr = cartItem.split(" & ");
            let price = parseFloat(productArr[1]);
            let quantity = parseInt(productArr[2], 10);

            if (isNaN(price)) {
               console.error("Invalid price for item " + i);
               price = 0; 
            }

            if (isNaN(quantity)) {
               console.error("Invalid quantity for item " + i);
               quantity = 1; 
            }

            let productName = productArr[0];
            let productDescription = getProductDescription(productName);

            let newRow = document.createElement("tr");

            let productCell = document.createElement("td");
            productCell.textContent = productName;
            newRow.appendChild(productCell);

            let descriptionCell = document.createElement("td");
            descriptionCell.textContent = productDescription; 
            newRow.appendChild(descriptionCell);

            let qtyCell = document.createElement("td");
            qtyCell.textContent = quantity;
            newRow.appendChild(qtyCell);

            let priceCell = document.createElement("td");
            priceCell.textContent = (price * quantity).toFixed(2);
            newRow.appendChild(priceCell);

            let subtotalCell = document.createElement("td");
            let itemSubtotal = price * quantity; 
            subtotalCell.textContent = itemSubtotal.toFixed(2);
            newRow.appendChild(subtotalCell);

            cartTable.appendChild(newRow);

            subtotal += itemSubtotal;
         } else {
            console.error("No cart item found for index " + i);
         }
      }

      // Calculate tax and final total
      let taxTotal = subtotal * taxRate;
      let finalTotal = subtotal + taxTotal;

      // Add the totals row
      let totalsRow = document.createElement("tr");

	  // subtotal row
      let totalsLabelCell = document.createElement("td");
      totalsLabelCell.textContent = "Subtotal";
      totalsLabelCell.colSpan = 4;
      totalsRow.appendChild(totalsLabelCell);

      let subtotalPriceCell = document.createElement("td");
      subtotalPriceCell.textContent = "$" + subtotal.toFixed(2);
      totalsRow.appendChild(subtotalPriceCell);
      cartTable.appendChild(totalsRow);

	  // taxtotal row
      let taxRow = document.createElement("tr");
      let taxLabelCell = document.createElement("td");
      taxLabelCell.textContent = "Tax (11%)";
      taxLabelCell.colSpan = 4;
      taxRow.appendChild(taxLabelCell);

      let taxPriceCell = document.createElement("td");
      taxPriceCell.textContent = "$" + taxTotal.toFixed(2);
      taxRow.appendChild(taxPriceCell);
      cartTable.appendChild(taxRow);

	  // final total row
      let finalRow = document.createElement("tr");
      let finalLabelCell = document.createElement("td");
      finalLabelCell.textContent = "Final Total";
      finalLabelCell.colSpan = 4;
      finalRow.appendChild(finalLabelCell);

      let finalPriceCell = document.createElement("td");
      finalPriceCell.textContent = "$" + finalTotal.toFixed(2);
      finalRow.appendChild(finalPriceCell);
      cartTable.appendChild(finalRow);

	  // row to display date
      let dateRow = document.createElement("tr");
      let dateLabelCell = document.createElement("td");
      dateLabelCell.textContent = "Date";
      dateLabelCell.colSpan = 4;
      dateRow.appendChild(dateLabelCell);

      let dateCell = document.createElement("td");
      let currentDate = new Date().toLocaleDateString();
      dateCell.textContent = currentDate;
      dateRow.appendChild(dateCell);
      cartTable.appendChild(dateRow);

      cartContainer.appendChild(cartTable);
   } else {
      console.log("No items in cart.");
   }
}


function getProductDescription(productName) {
   switch (productName) {
      case "Great Game":
         return "A Great Game";
      case "Okay Game":
         return "An Okayish Game";
      case "Basic Game":
         return "A Very Basic Game";
	  case "Advanced Game":
	     return "The Most Advanced Game";
	  case "Interesting Game":
	     return "An Interesting Game";
      default:
         return "No description available";
   }
}