"use strict";
/*    
      Author: Kylie Drawdy
      Date: 09/16/24   
*/

// Constants to set the time given for the quiz in seconds
const quizTime = 20;
// and the correct answers to each quiz question
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
// Declare startQuiz element
let startQuiz = document.getElementById("startquiz");
// Declare quizClock element
let quizClock = document.getElementById("quizclock");
// Declare overlay element
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
// Declare timeLeft for quizTime
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Function to start quiz when start quiz button is clicked
startQuiz.onclick = function() {
	// display the quiz
	overlay.className = "showquiz";
	// start the countdown
	timeID = setInterval(countdown, 1000);
}

// Function for the countdown
function countdown() {
	// if statement to check if time is up
	if (timeLeft === 0) {
		// clear the time interval
		clearInterval(timeID);
		// declare variable to get total of correct answers
		let totalCorrect = checkAnswers();
		// if statement to check for total correct answers
		if (totalCorrect === correctAnswers.length) {
			// window alert to display score if correct answers equals the number of questions (a 100%)
			window.alert("Congratulations! You got a 100%!")
		// else statement to determine number of correct answers if not equal to number of questions
		} else {
			// window alert to display number of correct answers out of total questions
			window.alert("You got " + totalCorrect + " correct out of " + correctAnswers.length);
			// set timeLeft equal to quizTime to reset the timer
			timeLeft = quizTime;
			// set clcok value equal to quiztime to reset timer
			quizClock.value = quizTime;
			// hide the quiz
			overlay.className = "hidequiz";
		}
	// else statement to count down the timer if timer is not equal to 0
	} else {
		// subtract from timeLeft if counter is not equal to 0
		timeLeft --;
		// set quizClock value equal to timeLeft to display to userAgent
		quizClock.value = timeLeft;
	}
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

