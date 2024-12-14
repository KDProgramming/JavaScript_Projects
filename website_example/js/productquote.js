 /*    Author: Kylie Drawdy
      Date: 10/21/2024
*/
 
 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 

 let products = document.getElementsByClassName("productItem");
 
 for ( let i = 0; i < products.length; i++) {
	// added event listener and run function when item is clicked
	products[i].addEventListener("click", calcTotal)
 }
 
 // create calcTotal Function
 function calcTotal() {
	 // declare variables
	 let orderTotal = 0
	 let taxRate = 0.11;
	 
	 // create for loop to loop through items
	 for (let i = 0; i < products.length; i++){
		// create if statement to check if items are checked
		if (products[i].checked){
			// increase orderTotal by number of menu items
			orderTotal += Number(products[i].value);
		}
	}
	
	// calculate sales tax
	let taxTotal = orderTotal * taxRate;
	
	// calculate grand total
	let grandTotal = orderTotal + taxTotal;
	
	// add totals to page
	document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
	document.getElementById("taxTotal").innerHTML = formatCurrency(taxTotal);
	document.getElementById("grandTotal").innerHTML = formatCurrency(grandTotal);
 }