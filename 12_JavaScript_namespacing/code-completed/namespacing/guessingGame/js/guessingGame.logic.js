/*jslint browser:true */
/*global guessingGame: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
guessingGame.logic = (function () {
	"use strict";
	var collectGreeting, greetings, shuffle, createGreetings;

	// Build our greetings array
	createGreetings = function () {
		greetings = ["Hej", "Hello", "Privit", "Hola"];
	};
	// Shuffle our greetings array
	shuffle = function () {
		greetings.sort(function () {
			var randomNumber = Math.ceil(Math.random() * 2);
			if (randomNumber === 2) {
				randomNumber = -1;
			}
			return randomNumber;
		});
	};
	// Collect a random greeting and return it.
	collectGreeting = function () {
		createGreetings();
		shuffle();
		return greetings.pop();
	};
	return {
		getGreeting: collectGreeting
	};
}());