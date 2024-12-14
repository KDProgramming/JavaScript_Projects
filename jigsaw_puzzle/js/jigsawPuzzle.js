"use strict";
/*    
      Author: Kylie Drawdy
      Date: 10/29/24   
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "images/piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// for loop to iterate through items in pieces
for (let items of pieces) {
	// run grabPiece in response to pointerdown
	items.addEventListener("pointerdown", grabPiece);
}

// create grabPiece function
function grabPiece(e) {
	// set value of pointer x to value of clientx
	pointerX = e.clientX;
	// set value of pointer y to value of clienty
	pointerY = e.clientY;
	// set value of touchAction style for event target to none
	e.target.style.touchAction = "none";
	// increase vaue of zcounter by 1
	zCounter++;
	// apply counter value to xindex style of event target
	e.target.style.zIndex = zCounter;
	// set value of pieceX to value of offsetleft
	pieceX = e.target.offsetLeft;
	// set value of pieceY to value of offsettop
	pieceY = e.target.offsetTop
	// add event listener that runs movePiece function in response to pointermove event
	e.target.addEventListener("pointermove", movePiece);
	// add event listener that runs dropPiece function in response to pointerup event
	e.target.addEventListener("pointerup", dropPiece);
}

// create movePiece Function
function movePiece(e) {
	// declare diffx variable and set equal to the difference between clientx and pointerX
	let diffX = e.clientX - pointerX;
	// declare diffy variable and set equal to the difference between clienty and pointerY
	let diffY = e.clientY - pointerY;
	// set value of left style property to sum of piecex and diffx plus text string "px"
	e.target.style.left = pieceX + diffX + "px";
	// set value pf top style property to sum of piecey and diffy plis text string "px"
	e.target.style.top = pieceY + diffY + "px";
}

// create dropPiece function
function dropPiece(e) {
	// remove movePiece function from event listener for pointermove event
	e.target.removeEventListener("pointermove", movePiece);
	// remove dropPiece function from event listener for pointerup event
	e.target.removeEventListener("pointerup", dropPiece);
}