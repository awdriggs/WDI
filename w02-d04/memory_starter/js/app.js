window.onload = function() {
	console.log('Loaded, yo');	

	///////// EVENTS 
	document.getElementsByTagName('button')[0].addEventListener("click", memoryGame.start);
	
	//////// GLOBAL VARIABLES
	board = document.getElementById('game');
	footer = document.getElementById('footer');
	memoryGameThis = memoryGame; //global variable for the game object

}


// USE THIS TO SHUFFLE YOUR NUMBERS
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
	//debugger;
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};


var memoryGame = {
	//////////////////////////////////////////////////////////
	// 					Object Attributes					//
	//////////////////////////////////////////////////////////
	tiles:["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J"],
	counter: 0, //count the number of clicks, use for winning message
	
	//////////////////////////////////////////////////////////
	// 					Object Behaviors					//
	//////////////////////////////////////////////////////////
	start : function(){
		//shuffle the tiles
		//debugger;
		memoryGameThis.tiles = shuffle(memoryGameThis.tiles);
		memoryGameThis.makeAndDisplayTiles(); 
	}, 
	
	makeAndDisplayTiles: function(){
		board.innerHTML = ''; //reset the game board
		footer.innerHTML = '';
		this.counter = 0; //reset the counter
		//loop throught the shuffled array,\
		for(var i = 0; i < this.tiles.length; i++){
			var card = document.createElement('div');
			board.appendChild(card);
			//column css class handles most of the styling
			card.setAttribute('class', 'column');
			card.setAttribute('data-value', this.tiles[i]);
		}
		//add click events to every tile
		this.addEventsToTiles(); 
	},

	addEventsToTiles : function() {
		var cellsArray = document.getElementsByClassName('column');

		//for loop to set even listener for each of the cards
		//use an anonymous function so that you can pass a tile to makePlay
		for(var i = 0; i < cellsArray.length; i++){
			cellsArray[i].addEventListener("click", function() {
				memoryGameThis.makePlay(this);
			});	
		}
	},

	makePlay : function(tile) {
		
		
		if(tile.className == "column found"){
			//this is a hack to stop clicks on tiles that are already found
			//don't do anyting if the tile has already been found and is clicked
		} else{	
			this.counter++; //increment the clicks
			tile.innerHTML = tile.getAttribute('data-value');
			tile.setAttribute('class', 'column found clicked')

			var checkArray = document.getElementsByClassName('clicked');


			//run this once there are two items clicked
			if(checkArray.length == 2){
				//check to see if the two items in the array are equal
				var check = this.checkForMatch(checkArray);


				if(check == true){
					//this was needed because the checkArray length changes once you reset an atribute!
					var firstTile = checkArray[0];
					var secondTile = checkArray[1];

					firstTile.setAttribute('class', 'column found');
					secondTile.setAttribute('class', 'column found');
					
					//check for wins everytime 
					this.checkForWin();
				} else {
					// hack! the setTimeout is needed so the numbers don't disapear to quickly!!
					setTimeout(function(){  

						var firstTile = checkArray[0];
						var secondTile = checkArray[1];

						firstTile.setAttribute('class', 'column');
						firstTile.innerHTML = "";

						secondTile.setAttribute('class', 'column');
						secondTile.innerHTML = "";
					}, 500);

					
				}
				
			}
		}
	},

	checkForMatch : function(checkArray){
		var a = checkArray[0].getAttribute('data-value');
		var b = checkArray[1].getAttribute('data-value'); 
		if(a == b){
			return true;
		} else {
			return false;
		}
	},

	checkForWin : function(){
		var checkWinArray = document.getElementsByClassName('found');
		if(checkWinArray.length == this.tiles.length){
			
			footer.innerHTML = "Game Over, found in " + this.counter/2 + " tries!";
		}
	}
}














