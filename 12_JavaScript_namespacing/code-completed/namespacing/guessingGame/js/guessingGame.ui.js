/*jslint browser:true */
/*global guessingGame: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
guessingGame.ui = {
	askForGreeting: function () {
		"use strict";
		// Ask the user to guess a greeting
		// Return their guess
		return prompt("What greeting am I thinking of?");
	},
	showResult: function (won, guess, answer) {
		"use strict";
		// Show how it went. Did the user win or loose?
		// won = true if the user guessed correctly otherwise false
		// guess = word user guessed
		// answer = the correct answer
		if (won) {
			alert("WELL DONE \n You guessed the correct answer. " + answer);
		} else {
			alert("OHHHHH NOOO \n You guessed " + guess + " and the answer was " + answer);
		}
	}
};