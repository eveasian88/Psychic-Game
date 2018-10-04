// array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var secretLetter = "a";


// initial computer letter
window.onload = function () {
	secretLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	secretLetter.push(compGuess);
	console.log(secretLetter); // used for debugging
}


// game
document.onkeyup = function (event) {
	var playerGuess = event.key;
	console.log(computerChoices);
	if (computerChoices.includes(playerGuess)) {
		console.log("good key");
		
		lettersGuessed.push(playerGuess);

		if ((playerGuess === secretLetter) && (guessesLeft > 0)) {
			wins++;
			alert("Wow, you guessed right! You may be psychic.");
			guessesLeft = 9;
			lettersGuessed.length = 0;
			secretLetter.length = 0;
			var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			secretLetter.push(compGuess);
			console.log(secretLetter);
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
			console.log(secretLetter);
		}
		var html = "<p>Guess what letter I'm thinking of _ !</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses left: " + guessesLeft + "</p>" +
			"<p>Your guesses so far: " + lettersGuessed + "</p>";

		document.querySelector("#game").innerHTML = html;
	}

	else {
		alert("press alphabet letters only")
	}
	console.log(secretLetter[0]); //used for debugging

	
}