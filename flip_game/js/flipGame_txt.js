"use strict";
/*    
      Author: Kylie Drawdy
      Date: 09/16/24   
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Object that will reference the first tile clicked by the player
let firstFlipped;
// Object that will reference the second tile clicked by the player
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Function to run when the page is loaded
window.addEventListener("load", scrambleTiles);
// Function to run when the page is loaded
window.addEventListener("load", playConcentration)



// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
	// for loop to loop through tiles
   for (let i = 0; i <= allTiles.length; i++) {
      
      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length*Math.random());
      
      // Randomly insert a tile before the current tile in the loop
	  // fipped board.children[i] and board.children[randomIndex]
      board.insertBefore(board.children[randomIndex], board.children[i]);      
   }
}


// Function that sets up the game play
function playConcentration() {
   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {
      
      // Run when a tile is clicked
      allTiles[i].onclick = function() {
         // Test to see if the back of the tile is displayed
		 // changed This to this and added equal signs
         if (this.lastElementChild.className === "back") {
            
            tilesFlipped++;  // increase the flip count by 1
            
			// if statement to determine if one tile is flipped
			// fixed equal signs
            if (tilesFlipped === 1) {
               // if this is the first tile clicked then flip it
			   // changed This to this
               firstFlipped = this;
			   // append flipped tile
               firstFlipped.appendChild(firstFlipped.firstElementChild);
			// else if statement to determine if two tiles are flipped
			// fixed equal signs
            } else if (tilesFlipped === 2) {
               // if this is the second tile clicked then flip it
			   // changed This to this
               secondFlipped = this;
			   // append flipped tile
               secondFlipped.appendChild(secondFlipped.firstElementChild);
			   // flip both tiles back after 1 second
			   // changed miliseconds
               timeID = window.setTimeout(flipBack, 1000);
            }
         }
      }
   }  
   
   /* Function to flip the two tiles if they don't match */
   function flipBack() {
      // test to determine whether the tile images don't match
      if (firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {   
         
         // if they don't match, then flip first tiles
         firstFlipped.appendChild(firstFlipped.firstElementChild);
		 // if they don't match, then flip second tile
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      
      // Reset the tiles flipped counter to zero
      tilesFlipped = 0;
   }   
}


