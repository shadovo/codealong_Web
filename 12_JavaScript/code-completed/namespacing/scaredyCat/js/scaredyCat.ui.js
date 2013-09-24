/*jslint browser:true */
/*global scaredyCat: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
scaredyCat.ui = (function () {
	"use strict";
	var askName, drawHand, drawScareCrow, getCatCard, getBirdCard, showCard, showWinner;
	// Asks a player to enter their name
	// returns the players name
	askName = function () {
		return prompt("Hello player. What's your name?");
	};
	// shows the card a player has just been dealt.
	// recieves a player object and a single card
	showCard = function (player, card) {	
		// card 
		// 1 = 1 bird card
		// 2 = 2 bird card
		// 3 = 3 bird card
		// 4 = cat
		// 5 = scareCrow 
		var text;
		text = player.name + " recieved a card: ";
		if (card <= 3) {
			text = text + " " + card + " birds";
		} else if (card === 4) {
			text = text + "SCAREDY CAT!!!!";
		} else {
			text = text + " Scarecrow!!!!";
		}
		alert(text);
	};
	// recieves the player object.
	// writes out the players name and then visualises the players hand	
	drawHand = function (player) {
		var text, i, cards;
		cards = player.getHand();
		text = player.name + " cards: \n";
		for (i = 0; i < cards.length; i = i + 1) {
			text = text + cards[i] + " birds\n";
		}
		console.log(text);
	};
	// draws out the scareCrow.
	// recieves a number 0 to 6 relating to how many pieces of the
	// scarecrow should be drawn
	drawScareCrow = function (scareCrow) {
		var text, number;
		number = scareCrow.getPieces();
		text = "ScareCrow: \n";
		text += number + " pieces\n";
		console.log(text);
	};
	// Game over
	// and shows who won the game
	showWinner = function (player) {
		var text;
		text = "Game over \n";
		text += "Congratulations " + player.name + "\n";
		text += "Points = " + player.getPoints();
		alert(text);
	};
	// Public methods
	return {
		askName: askName,
		showCard: showCard,
		drawHand: drawHand,
		drawScareCrow: drawScareCrow,
		showWinner: showWinner
	};
}());