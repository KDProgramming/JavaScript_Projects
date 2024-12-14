/*    
      Author: Kylie Drawdy
      Date: 9/03/24   
*/

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 
 // declare menu items variable
 let menuItems = document.getElementsByClassName("menuItem");
 
 // create for loop to loop through contents of menuItems
 for ( let i = 0; i < menuItems.length; i++) {
	// added event listener and run function when item is clicked
	menuItems[i].addEventListener("click", calcTotal)
 }
 
 // create calcTotal Function
 function calcTotal() {
	 // declare variables
	 let orderTotal = 0
	 // create for loop to loop through items
	 for (let i = 0; i < menuItems.length; i++){
		// create if statement to check if items are checked
		if (menuItems[i].checked){
			// increase orderTotal by number of menu items
			orderTotal += Number(menuItems[i].value);
		}
	}
	document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
 }