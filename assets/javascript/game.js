// array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var secretLetter;

// initial computer letter
window.onload = function () {
	setGame()
}

function setGame() {
	guessesLeft = 9;
	lettersGuessed = [];
	secretLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	// this checks for bugs
	// console.log(secretLetter);
}

// game
document.onkeyup = function (event) {
	var playerGuess = event.key;
	// this checks for bugs
	// console.log(computerChoices);

	if (computerChoices.includes(playerGuess)) {
		// this checks for bugs
		// console.log("good key");

		if (lettersGuessed.includes(playerGuess)) { 
			return;
		}
		lettersGuessed.push(playerGuess);

		if ((playerGuess === secretLetter) && (guessesLeft > 0)) {
			wins++;
			var psychicMusic = new Audio("assets/sound/psychicMusic.m4a");
			psychicMusic.play();

			alert("Wow, you're right, the letter is " + secretLetter.toUpperCase() + "!!! You are psychic!!!");
			setGame()
			// this checks for bugs
			// console.log(secretLetter);
		}

		else if ((playerGuess !== secretLetter) && (guessesLeft > 0)) {
			guessesLeft = guessesLeft - 1;
		}

		else {
			losses++;
			guessesLeft = 9;
			lettersGuessed.length = 0;
			secretLetter.length = 0;
			var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			secretLetter.push(compGuess);
			// this checks for bugs
			// console.log(secretLetter);
		}

		var html = "<p>Guess what letter I'm thinking of _ !</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses left: " + guessesLeft + "</p>" +
			"<p>Your guesses so far: " + lettersGuessed + "</p>";

		document.querySelector("#game").innerHTML = html;
	}

	else {
		alert("please press alphabet letters only")
	}
	// this checks for bugs
	// console.log(secretLetter[0]); 
}