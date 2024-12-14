/*   
      Author: Kylie Drawdy
      Date: 09/11/24   
*/
// add strict command
"use strict";

// Declare Global variables
// added parenthesis to (cash)
let cashBox = document.getElementById("cash");
// added parenthesis to (bill)
let billBox = document.getElementById("bill");
// added parenthesis to (change)
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash value changes
// fixed type in run(The)Register
cashBox.addEventListener("change", runTheRegister);
// Event handlers to be run when the bill value changes
// fixed type in run(The)Register
billBox.addEventListener("change", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
   // set changeBox value to 0
   changeBox.value = 0;
   // reset $20 bill value
   document.getElementById("bill20").innerHTML = 0;
   // reset $10 bill value
   document.getElementById("bill10").innerHTML = 0;
   // reset $5 bill value
   document.getElementById("bill5").innerHTML = 0;
   // reset $1 bill value
   document.getElementById("bill1").innerHTML = 0;
   // reset quarter value
   document.getElementById("coin25").innerHTML = 0;
   // reset dime value
   document.getElementById("coin10").innerHTML = 0;
   // reset nickel value
   document.getElementById("coin5").innerHTML = 0;
   // reset penny value
   document.getElementById("coin1").innerHTML = 0;
   // reset warning value
   document.getElementById("warning").innerHTML = "";
}

// Function to run the cash register
function runTheRegister() {
   // clear the register
   zeroTheRegister();
   
   let changeValue = cashBox.value - billBox.value;  // calculate the change 

   changeBox.value = formatCurrency(changeValue); // format the change as currency

   calcChange(changeValue); // Determine the units of currency needed for the change
   
   // added try catch statement
   try {
	// test if changeValue is nto grater than or equal to 0
	if (!(changeValue >= 0)) throw "Cash Amount Doesn't Cover the Bill"; {
	   // set changeBox value to changeValue
	   changeBox.value = formatCurrency(changeValue);
	   // run change value through calcChange function
	   calcChange(changeValue);
	}
	// catch statement for error
   } catch (error) {
	 // chnage innerHTML of warning
	 document.getElementById("warning").innerHTML = error;
   }
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
   // Determine the number of $20 bills
   let bill20Amt = determineCoin(changeValue, 20);
   // change $20 bill innerHTML 
   document.getElementById("bill20").innerHTML = bill20Amt;
   // subtract from changeValue
   changeValue -=  bill20Amt*20;

   // Determine the number of $10 bills   
   let bill10Amt = determineCoin(changeValue, 10);
   // change $10 bill innerHTML 
   document.getElementById("bill10").innerHTML = bill10Amt;
   // subtract from changeValue
   changeValue -=  bill10Amt*10;
  
   // Determine the number of $5 bills
   let bill5Amt = determineCoin(changeValue, 5);
   // change $5 bill innerHTML 
   document.getElementById("bill5").innerHTML = bill5Amt;
   // subtract from changeValue
   // changed 3 to 5
   changeValue -=  bill5Amt*5;  
  
   // Determine the number of $1 bills
   let bill1Amt = determineCoin(changeValue, 1);
   // change $1 bill innerHTML 
   document.getElementById("bill1").innerHTML = bill1Amt;
   // subtract from changeValue
   changeValue -=  bill1Amt*1;  
  
   // Determine the number of quarters
   let coin25Amt = determineCoin(changeValue*100, 25);
   // change quarter innerHTML 
   document.getElementById("coin25").innerHTML = coin25Amt;
   // subtract from changeValue
   changeValue -= coin25Amt*0.25;   
  
   // Determine the number of dimes
   let coin10Amt = determineCoin(changeValue*100, 10);
   // change dime bill innerHTML 
   document.getElementById("coin10").innerHTML = coin10Amt;
   // subtract from changeValue
   changeValue -= coin10Amt*0.10; 
   
   // Determine the number of nickels
   let coin5Amt = determineCoin(changeValue*100, 5);
   // change nickel innerHTML 
   document.getElementById("coin5").innerHTML = coin5Amt;
   // subtract from changeValue
   changeValue -= coin5Amt*0.05;  
   
   // Determine the number of pennies
   // The Math.round() method rounds the value to the nearest integer
   let coin1Amt = Math.round(changeValue*100);
   // change penny bill innerHTML 
   document.getElementById("coin1").innerHTML = coin1Amt;

}








/* ================================================================= */

// Function to determine the largest whole number of currency units that 
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
   // The parseInt() function returns the integer value of the ratio
   return parseInt(cashValue/currencyUnit);
}

 // Function to display a numeric value as a text string in the format ##.## 
 function formatCurrency(value) {
    return value.toFixed(2);
 }