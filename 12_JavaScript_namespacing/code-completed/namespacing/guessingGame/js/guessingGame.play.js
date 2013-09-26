/*jslint browser:true */
/*global guessingGame: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
guessingGame.play = function () {
	"use strict";
	var guess, answer, correct;
	// Get the users guess
	guess = guessingGame.ui.askForGreeting();
	// Get a random greeting
	answer = guessingGame.logic.getGreeting();
	// See if the gues is the same as the answer
	correct = (guess.toUpperCase() === answer.toUpperCase());
	// Show the user how it went
	guessingGame.ui.showResult(correct, guess, answer);
};