"use strict";
/*    Author: Kylie Drawdy
      Date: 10/21/2014
*/

/* Page Objects */
// get best element and store in besttext variable
let bestText = document.getElementById("best");
// get timer element and store in clockTimer variable
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
	// if statement to test whether the document.cookie object exists
   if (document.cookie) {
	   // change text content of bestText object to text string getBestTime() + " seconds"
      bestText.textContent = getBestTime() + " seconds";
   }
});

// create getBestTime function to retrieve users current best time
function getBestTime() {
	// if statement to test whether document.cookie exists
   if (document.cookie) {
	   // declare cookieArray variable containing text of document cookie split at occurrence of "=" character
      let cookieArray = document.cookie.split("=");
	  // convert cookie value to integer and return it from function
      return parseInt(cookieArray[1]);
	// document.cookie does not exist
   } else {
	   // return value of 9999
      return 9999;
   }
}

// create updaterecord function to replace the users best time with the time if their recent attempt was better
function updateRecord() {
	// declare solutionTime variable and store value of document element with id of "timer" and apply parseINT function to convert string to int
   let solutionTime = parseInt(document.getElementById("timer").value);
   // call getBestTime function and store value in bestTime
   let bestTime = getBestTime();
   // if statement to check if solutionTime is less than bestTime
   if (solutionTime < bestTime) {
	   // let bestTime equal solutionTime
      bestTime = solutionTime;
   }
   
   // chnage text content of bestText to bestTime + " seconds"
   bestText.textContent = bestTime + " seconds";
   // writ text string to document.cookie object
   document.cookie = "puzzle8Best=" + bestTime + "; max-age=" + 60*60*24*90; 
}







