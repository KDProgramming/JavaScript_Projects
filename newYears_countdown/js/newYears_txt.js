"use strict";
/*    
      Author: Kylie Drawdy
      Date: 10/7/2024   
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// add command using setInterval method to run countdown function every 1000 miliseconds
window.setInterval(countdown, 1000);

// create countdown function 
function countdown() {
	// declare now variable and use new Date() to store current date and time
	let now = new Date();
	// apply toLocaleString method to now variable to display text of current date and time in currentTime object
	currentTime.textContent = now.toLocaleString();
	// declare newYear variable using new Date() to store the date "January 1, 2024"
	let newYear = new Date("January 1, 2024");
	// use getFullYear() to retirve 4 digit year value from now variable, increase value by 1 and store result in nextYear variable
	let nextYear = now.getFullYear() + 1;
	// use setFullYear() method to change year value of newYear to value of nextYear
	newYear.setFullYear(nextYear);
	
	// determine days, hours, minutes, and seconds until the new year
	// calculate days left by calculating difference between newYear and now and dividing the difference by 1000*60*60*24. Store in daysleft variable
	let daysLeft = (newYear - now)/(24*60*60*1000);
	// multiply fractional part of daysLeft by 24 and store in hrsLeft
	let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
	// multiply fractional part of hrsLeft by 60 and store in minsLeft
	let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	// multiply fractional part of minsLeft by 60 and store in secsLeft
	let secsLeft = (minsLeft - Math.floor(minsLeft))*60;
	
	// apply Math.floor method to daysLeft variable and write result to text content of daysLeftBox
	daysLeftBox.textContent = Math.floor(daysLeft);
	// apply Math.floor method to hrsLeft variable and write result to text content of hrsLeftBox
	hrsLeftBox.textContent = Math.floor(hrsLeft);
	// apply Math.floor method to minsLeft variable and write result to text content of minsLeftBox
	minsLeftBox.textContent = Math.floor(minsLeft);
	// apply Math.floor method to secsLeft variable and write result to text content of secsLeftBox
	secsLeftBox.textContent = Math.floor(secsLeft);
}