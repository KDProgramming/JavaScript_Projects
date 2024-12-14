/*    Author: Kylie Drawdy
      Date: 10/21/2024
*/

function verifyForm() {
	 
	 event.preventDefault();
	 
	 /* declare variable name and set value */
	 let firstName = document.getElementById("firstName").value;
	 let lastName = document.getElementById("lastName").value;
	 /* declare address variables */
	 let address = document.getElementById("address").value;
	 let city = document.getElementById("city").value;
	 let state = document.getElementById("state").value;
	 let zipCode = document.getElementById("zip").value;
	 /* declare variable email and set value */
	 let email = document.getElementById("email").value;
	 /* declare variable phone and set value */
	 let phone = document.getElementById("phone").value;
	 /* conditional opperator added */
	 //(name && email && phone) ?
	 /* true window alert added */
	 //window.alert("Thank you!"):
	 /* false window alert added */
	 //window.alert("Please fill in all fields!");
	 
	 let missingItems = '';
	 
	 if (!firstName) missingItems += "First Name\n";
     if (!lastName) missingItems += "Last Name\n";
     if (!address) missingItems += "Address\n";
     if (!city) missingItems += "City\n";
     if (!state) missingItems += "State\n";
     if (!zipCode) missingItems += "Zip Code\n";
     if (!email) missingItems += "Email\n";
     if (!phone) missingItems += "Phone\n";

     if (missingItems) {
        window.alert("Please fill in the following fields:\n" + missingItems);
     } else {
        window.alert("Thank you!");
     }
 }
/* added event listener */
document.getElementById("submit").addEventListener("click", verifyForm);