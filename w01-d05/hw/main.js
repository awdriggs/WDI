console.log("main.js working");

var testWords = ["acres", "adult", "advice", "arrangement", "attempt", "August", "autumn", "border", "breeze", "brick", 
			 "calm", "canal", "casey", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", 
			 "damage", "danny", "deeply", "depth", "discussion", "doll", "donkey", 
			 "egypt", "ellen", "essential", "exchange", "exist", "explanation", 
			 "facing", "film", "finest", "fireplace", "floating", "folks", "fort", 
			 "garage", "grabbed", "grandmother", "habit", "happily", "Harry", "heading", "hunter", 
			 "illinois", "image", "independent", "instant", "january", "kids", "label", "lee", "lungs", 
			 "manufacturing", "martin", "mathematics", "melted", "memory", "mill", "mission", "monkey", "mount", "mysterious", 
			 "neighborhood", "norway", "nuts", "occasionally", "official", "ourselves", 
			 "palace", "pennsylvania", "philadelphia", "plates", "poetry", "policeman", "positive", "possibly", "practical", "pride", "promised", 
			 "recall", "relationship", "remarkable", "require", "rhyme", "rocky", "rubbed", "rush", 
			 "sale", "satellites", "satisfied", "scared", "selection", "shake", "shaking", "shallow", "shout", "silly", "simplest", "slight", "slip", "slope", "soap", "solar", "species", "spin", "stiff", "swung", 
			 "tales", "thumb", "tobacco", "toy", "trap", "treated", "tune", 
			 "university", "vapor", "vessels", "wealth", "wolf", "zoo"];


var playHangman = function() {
	var play = confirm("Would you like to play hangman?")

//initialize the game with a word from the array above
	var letsPlay = new Game();
	
	//creates a game to play, gets the index of the word back
	var index = letsPlay.startGame(testWords);
	
	//take the word out of the index, so there are no repeats
	testWords.splice(index, 1);

//while game over is false, play the game
	while(play == true){
		//ask for a user guess
		letsPlay.render();
		var userGuess = prompt("Make a guess \n");
		userGuess = userGuess.toLowerCase();
	
		//check the guess against the currnet word in game, only take the first char incase the usr types in word
		letsPlay.guess(userGuess[0]);

		//check to make sure game is not over using isOver
		if(letsPlay.isOver() == true){
			play = false;

			//when game is over, print the over message
			letsPlay.overMessage();

			//play the game again, recursive method
			playHangman();
		}	



	}
}

//Lets play hangman!
playHangman();

