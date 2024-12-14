/*
      Author: Kylie Drawdy
      Date: 11/13/2024
   */
/*---------------- CONSTANTS ---------------------*/
const TEXT_SIZE = 30;
const BOX_HEIGHT = 200;
const BOX_WIDTH = 700;
const BOX_PADDING = 10;
const MAX_WORDS = 15;

/*--------------- Object Code --------------------*/

// create box
let box = {
	// create width property
	width: BOX_WIDTH,
	// create height property
	height: BOX_HEIGHT,
	// set xPos equal to 0
	xPos: 0,
	// set yPos equal to 0
	yPos: 0
};

// create constructor function for word class
function word(size, text) {
	this.size = size;
	this.text = text;
	this.xPos = null;
	this.yPos = null;
	this.xVelocity = null;
	this.yVelocity = null;
}

// create moveWithin method
word.prototype.moveWithin = function(container) {
	let wordTop = this.yPos;
	let wordLeft = this.xPos;
	let wordBottom = this.yPos + this.size;
	let wordRight = this.xPos + this.text.length * this.size * 0.6;

	// if statement to check if wordTop is less than 0 or wordBottom is greater than container.height
	if (wordTop < 0 || wordBottom > container.height) {
		this.yVelocity = -this.yVelocity;
	}
	// if statement to check if wordLeft is less than 0 or wordRight is greater than container.width
	if (wordLeft < 0 || wordRight > container.width) {
		this.xVelocity = -this.xVelocity;
	}

	// increase value of yPos by yVelocity to move word
	this.yPos += this.yVelocity;
	// increase value of xPos by xVelocity to move word
	this.xPos += this.xVelocity;
};

/*--------------- Interface Code -----------------*/

let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px";

// Counter to keep track of number of words added
let wordCount = 0;

let addWord = document.getElementById("addWord");

addWord.onclick = function() {
    if (wordCount >= MAX_WORDS) {
        alert("Maximum number of words reached!");
        return;
    }

    let newWord = new word(TEXT_SIZE, "Game");
    newWord.yPos = (BOX_HEIGHT - TEXT_SIZE) / 2;
    newWord.xPos = (BOX_WIDTH - newWord.text.length * TEXT_SIZE * 0.6) / 2;
    newWord.yVelocity = rand(-10, 10);
    newWord.xVelocity = rand(-10, 10);

    let boxElement = document.createElement("div");
    boxElement.className = "box";
    boxElement.style.position = "absolute";
    boxElement.style.border = "2px solid black";
    boxElement.style.width = (newWord.text.length * TEXT_SIZE * 0.6 + BOX_PADDING * 2) + "px"; 
    boxElement.style.height = (TEXT_SIZE + BOX_PADDING * 2) + "px"; 
    boxElement.style.left = newWord.xPos + "px";
    boxElement.style.top = newWord.yPos + "px";

    let wordElement = document.createElement("div");
    wordElement.className = "word";
    wordElement.style.position = "absolute";
    wordElement.style.fontSize = TEXT_SIZE + "px";
    wordElement.style.fontFamily = "Arial, sans-serif";
    wordElement.style.left = (BOX_PADDING) + "px";
    wordElement.style.top = (BOX_PADDING) + "px";
    wordElement.textContent = newWord.text;

    boxElement.appendChild(wordElement);
    boxImage.appendChild(boxElement);

    // Add to word count
    wordCount++;

    window.setInterval(function() {
        newWord.moveWithin(box);
        boxElement.style.top = newWord.yPos + "px";
        boxElement.style.left = newWord.xPos + "px";
    }, 25);
};

function rand(minVal, maxVal) {
    let size = maxVal - minVal + 1;
    return minVal + size * Math.random();
}