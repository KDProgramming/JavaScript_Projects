"use strict";
/*    
      Author: Kylie Drawdy
      Date: 10/7/2024   
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// add onclick event handler for addButton Object
addButton.onclick = function() {
	// use push() method to add value of customerName object to end of customers array
	customers.push(customerName.value);
	// run generateCustomerList() function to update contents of ordered list that appears on web page
	generateCustomerList();
	// change text of statue paragraph
	status.textContent = customerName.value + " added to end of the queue"
}
// add onclick event handler for searchButton Object
searchButton.onclick = function() {
	// use indexOf() method to locate index of array item whose value equals the value of the customerName object. Add 1 to index value and store in place variable
	let place = customers.indexOf(customerName.value) + 1;
	// if statement to determine if place is equal to 0
	if (place === 0) {
		// change text of status paragraph
		status.textContent = customerName.value + " is not found in the queue";
	// else statement if place is not equal to 0
	} else {
		// change text of status paragraph
		status.textContent = customerName.value + " found in postion " + place + " of the queue"
	}
}
// add onclick event handler for removeButton Object
removeButton.onclick = function() {
	// use indexof method to locate index of array item whose value equals the value of the customerName object. store in index variable
	let index = customers.indexOf(customerName.value);
	// if statement to determine if index is is not equal to -1 
	if (index !== - 1) {
		// use splice method to remove one item from customer array whose index eqauls value of index variable
		customers.splice(index, 1);
		// change text of status paragraph 
		status.textContent = customerName.value + " removed from the queue";
		// call generateCustomerList function to recreate the ordered list of customer names
		generateCustomerList();
	// else statement if index is equal to -1
   } else {
	   // change text of status paragraph
		status.textContent = customerName.value + " is not found in the queue";
   }
}
// add onclick event handler for topButton Object
topButton.onclick = function() {
	// apple shift method to remove first item from customers array. Store value in topCustomer variable
	let topCustomer = customers.shift();
	// chnage text of status paragraph
	status.textContent = topCustomer + " removed from the queue"
	// call generateCustomerList function
	generateCustomerList();
}