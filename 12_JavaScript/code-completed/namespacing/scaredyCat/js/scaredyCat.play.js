/*jslint browser:true */
/*global scaredyCat: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
scaredyCat.play = function () {
	"use strict";
	var scareCrow, numberOfPlayers, i, players, turn, currentCard, currentPlayer, winner;
	
	// Setup the game
	// Just now we are going to have max two players and not allow the user to change this
	numberOfPlayers = 2;

	// Create a player array to hold our 2 players
	players = [];

	// Populate the players array with players objects ++ For Loop p, players.
	// Asking the user to fill in the name of each player
	for (i = 0; i < numberOfPlayers; i = i + 1) {
		players.push(scaredyCat.logic.createPlayer(scaredyCat.ui.askName()));
	}

	// Create a deck of scaredy cat playing cards 
	scaredyCat.logic.createDeck();

	// Create a scarecrow
	scareCrow = scaredyCat.logic.createScareCrow();

	// set turn to be the index of the player to start the game ++ växla spelare.
	turn = 0;

	// Loop as long as the scarecrow is not complete ++ as long no one is dead.
	while (!scareCrow.isComplete()) {

		// Set the current player to the players who's turn it is ++ nuvarande spelares tur.
		currentPlayer = players[turn];

		// Get a card from the deck

		currentCard = scaredyCat.logic.getCard();
		// Show the card to the player

		scaredyCat.ui.showCard(currentPlayer, currentCard);
		// Depending on the value of the card do something with it

		if (currentCard <= 3) {
			// It's a bird card
			// So we add the card to the players hand
			currentPlayer.addCard(currentCard);

		} else if (currentCard === 4) {
			// It's a cat card
			// The cat card scares away all the bird cards from the current player
			currentPlayer.clearCards();

		} else {
			// It's a scarecrow card
			// so we add it to our scareCrow
			scareCrow.add();
		}
		// Draw hand of every player so we know who has what
		for (i = 0; i < players.length; i = i + 1) {
			scaredyCat.ui.drawHand(players[i]);
		}
		// Draw the scareCrow so we know how much we have left
		scaredyCat.ui.drawScareCrow(scareCrow);
		// Prepare for the next persons turn
		turn = turn + 1;
		// If the turn is the same as the number of players
		// we know it is the first persons turn again
		if (turn === numberOfPlayers) {
			turn = 0;
		}
		console.log("\n");
		console.log("\n");
		console.log("\n");
	}
	// The game is over here
	// We calculate the winner
	// Set the first player to be the winner
	winner = players[0];
	// Loop through the players and see if someone has beaten 
	// the first player / current winner.
	// If they have swap them with the winner
	// Must fix to Handle a draw
	for (i = 1; i < players.length; i = i + 1) {
		currentPlayer = players[i];
		if (currentPlayer.getPoints() > winner.getPoints()) {
			winner = currentPlayer;
		}
	}
	// Now we know who won so we congratulate the winner
	scaredyCat.ui.showWinner(winner);
};