"use strict";
/*   
      Author: Kylie Drawdy
      Date: 09/16/24   
*/

// Declare sourceDoc variable
let sourceDoc = document.getElementById("source_doc");
// Declare toc variable
let toc = document.getElementById("toc");
// Declare headingCount variable
let headingCount = 1;
// Declare constant
const heading = "H2";

// create for loop to loop through child elements
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
	// if statement to test if n.nodeName is equal to value of constant
	if (n.nodeName === heading) {
		// create element Node for anchor variale
		let anchor = document.createElement("a");
		// set value for name attribute of anchor
		anchor.name = "doclink" + headingCount;
		// insert anchor method before first child in Node
		n.insertBefore(anchor, n.firstElementChild);
		// create element node for list item
		let listItem = document.createElement("li");
		// create element node for a element
		let link = document.createElement("a");
		// append link to list item
		listItem.appendChild(link);
		// set link text content property
		link.textContent = n.textContent;
		// set value of href propery
		link.href = "#" + "doclink" + headingCount;
		// append list item to toc
		toc.appendChild(listItem);
		// increase value of headint count
		headingCount++;
	}
}