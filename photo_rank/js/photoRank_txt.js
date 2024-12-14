"use strict";
/*    
      Author: Kylie Drawdy
      Date: 09/16/24   
*/

// declare varible for images
let images = document.getElementsByTagName("img");
// declare variable for photo bucket
let photoBucket = document.getElementById("photo_bucket");
// declare photolist varibale
let photoList = document.getElementById("photo_list");

// for loop to loop through immages
for (let i = 0; i < images.length; i++) {
	// create function that runs when an images is clicked
	images[i].onclick = function() {
		// if statement to determine if an images parent element id is photo bucket
		if (this.parentElement.id === "photo_bucket") {
			// declare variable for new item and create list element
			let newItem = document.createElement("li");
			// append new item to photo list
			photoList.appendChild(newItem);
			// append image(this) to new item Object
			newItem.appendChild(this);
		// else statement if parent elemnt is not photo bucket
		} else {
			// declare old item variable equivalent to parent element
			let oldItem = this.parentElement;
			// append clicked image to photo bucket
			photoBucket.appendChild(this);
			// remove old item from parent element
			oldItem.parentElement.removeChild(oldItem);
		}
	}
}	