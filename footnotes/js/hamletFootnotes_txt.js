"use strict";
/*    
      Author: Kylie Drawdy
      Date: 09/16/24  
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// for loop to loop through phrases
for ( let i = 0; i < phrases.length; i++) {
	// create anonymous function that runs on click
	phrases[i].onclick = function() {
		// create phrases variable
		let phrase = document.createElement("h1");
		// set value of textContent
		phrase.textContent = this.textContent;
		
		// create footnote variable
		let footnote = document.createElement("p");
		// set value of text content
		footnote.textContent = footnotes[i];
		// apply style rules
		footnote.style = "font-style: italic; font-size: 1.2em;"
		
		// create close Button
		let closeButton = document.createElement("input");
		// set buttons type attribute
		closeButton.type = "button";
		// set closeButton value
		closeButton.value = "Close Footnote";
		// Apply styles
		closeButton.style = "display: block; margin: 10px auto;"
		
		// create popup window
		let popup = window.open("", "footnote", "width=300, height=200, top=100, left=100");
		// apply styles
		popup.document.body.style = "background-color: ivory; font-size: 16px; padding: 10px;"
		// append phrase to popup.document.body.style
		popup.document.body.appendChild(phrase);
		// append footnote to popup.document.body.style
		popup.document.body.appendChild(footnote);
		// append closeButton to popup.document.body.style
		popup.document.body.appendChild(closeButton);
		
		// run anonymous function on click of closeButton
		closeButton.onclick = function() {
			//close popup window
			popup.close();
		}
	}
}
