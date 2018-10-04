// array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


// initial computer letter
window.onload = function () {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]); // used for debugging
}


// game
document.onkeyup = function (event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]); //used for debugging

	if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
		wins++;
		alert(computerGuess[0]);
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	}

	else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
		guessesLeft = guessesLeft - 1;
	}


	else {
		losses++;
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	}

	document.onkeydown = function (event) {
		var keysRemoved = event.keyCode || event.charCode;
	
		if (keysRemoved == 8 || keysRemoved == 46);
		return false;
	} // need to work on this part

	// else {

	// }


	var html = "<p>Guess what letter I'm thinking of _ !</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses left: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + lettersGuessed + "</p>";

	document.querySelector("#game").innerHTML = html;

}