/*jslint browser:true */
/*global scaredyCat: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
scaredyCat.logic = (function () {
	"use strict";
	var getCard, createPlayer, createScareCrow, cards, createDeck, shuffleCards;
	// Performs a very simple form of shuffle on the cards
	// This function is private
	shuffleCards = function () {
		cards.sort(function () {
			var randomNumber = Math.ceil(Math.random() * 2);
			if (randomNumber === 2) {
				randomNumber = -1;
			}
			return randomNumber;
		});
	};
	// This function resets the deck of cards ands shuffles them
	createDeck = function () {
		var birdCards, catCards, scareCrowCards;
		// reset cards array in outer scope
		cards = [];
		birdCards = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
		catCards = [4, 4, 4, 4, 4];
		scareCrowCards = [5, 5, 5, 5, 5, 5];
		// Join all the arrays togethor into cards
		cards = cards.concat(birdCards, catCards, scareCrowCards);
		// Do a random sort of allCards before returning
		shuffleCards();
	};
	// Returns a card from the deck and removes it from the deck
	getCard = function () {
		// someone said my simple shuffle didn't work that well
		// so I shuffle between each time you collect a card
		shuffleCards();
		// gets a card from the pack
		return cards.pop();
	};
	// Creates a player object to store the current hand
	// and some logic for calculating points
	createPlayer = function (name) {
		var player, hand, i;
		hand = [];
		player = {};
		player.name = name;
		player.addCard = function (card) {
			hand.push(card);
		};
		player.getHand = function (card) {
			return hand;
		};
		player.clearCards = function () {
			hand = [];
		};
		player.getPoints = function () {
			var points = 0;
			for (i = 0; i < hand.length; i = i + 1) {
				points = points + hand[i];
			}
			return points;
		};
		return player;
	};
	// returns a scareCrow object to store the state of the scareCrow	
	createScareCrow = function () {
		var scareCrow, numberOfPieces, completed;
		numberOfPieces = 0;
		completed = false;
		scareCrow = {};
		scareCrow.add = function () {
			if (!completed) {
				numberOfPieces = numberOfPieces + 1;
				if (numberOfPieces === 6) {
					completed = true;
				}
			}
		};
		scareCrow.getPieces = function () {
			return numberOfPieces;
		};
		scareCrow.isComplete = function () {
			return completed;
		};
		return scareCrow;
	};
	// The public methods exposed in the logic namespace
	return {
		getCard: getCard,
		createDeck: createDeck,
		createPlayer: createPlayer,
		createScareCrow: createScareCrow
	};
}());