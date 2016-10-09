//console.log('working');

//train object prototype
function trains(line, stops) {
    this.train = line;
    this.stations = stops;
    
    //gets stations from the user when called
    this.getStations = function() {return this.stations;};
    
    //adds stations to the list, returns the station list
    this.addStations = function(a) {
    	this.stations.push(a);
    	return this.stations;
    };

   //searches for a stations, returns index, -1 if not in the list
   	this.stationSearch = function(search) {
		var index = this.stations.indexOf(search);
		return index;
	};


}

var lines = [new trains("L", ["8th Ave", "6th Ave", "Union Square", "3rd Ave", "1st Ave", "Bedford Ave"]), 
			 new trains("N", ["Times Square", "Herald Square", "28th st", "23rd st - WHAM Nexus", "Union Square", "8th st"]),
			 new trains("S", ["Grand Central", "33rd St", "28th st", "23rd st", "Union Square", "Astor Place"])
];

////////////////////////////////////////////////////
//tests the train prototype
////////////////////////////////////////////////////

// console.log(lines[0].getStations());
// console.log(lines[0].addStations("6th Ave"));
// console.log(lines[0].stationSearch("8th Ave"));
// console.log(lines.length);
// lines.push(new trains("Q", ["57th", "49th"]));
// console.log(lines);

///////////////////////////////////////////////
/*   Functions   */
////////////////////////////////////////////////

//Get index of a train line from the array of train objects
function getTrainIndex(a, searchArray) {
	var trainIndex = -1;
	var name;
	
	for(var i = 0; i < searchArray.length; i++){
		name = searchArray[i].train;
		if(a == name){
			trainIndex = i;
			break;
		}

	}
	return trainIndex;
}

//gets the user input, makes sure it is a line in the system
//you need to add the ability for the message to loop through the lines for the message to be accurate when a new train line is added
function promptForLine(){

	var message = "Please choose a train by typing the corresponding character: \n" 
	+ "The (L) Train\n" 
	+  "The (N) Train \n" 
	+ "The (S)ix Train\n" 
	+ "Click cancel to Exit"; 

	var line = prompt(message); 
	
	if(line == null){
		return null;
	}
		line = line.toUpperCase();
	 //make sure user input is in upper case
	
	//make sure the train is in the system
	while(getTrainIndex(line, lines) == -1){
	 	console.log("Not a Valid Train Line");
	 	promptForLine();
	}

	if(line == null){
		console.log("goodbye");
	}

	return line;
}

//master function that calls the other functions. Runs until running is false
function runProgram(){
	var running = true;

	while(running == true){
		//run the program

		//Ask for line
		var userChoice = promptForLine();
		
		if(userChoice == null){
			running = false;
			alert("Goodbye!");
			return null;
		} 

		//print station list for selected line to console.
		var index = getTrainIndex(userChoice, lines);
		console.log(lines[index].getStations());

		//prompt user if they want to add a station to the line that they are on
		if(confirm("Would you like to add a station to the " + userChoice + " line?")) {
		//ask user for station name, push it to the end of the array that is holding the stations for that line
			lines[index].addStations(prompt("Add one station to the " + userChoice + " line."));
			console.log("Station Added!");
			console.log(lines[index].getStations());
		}

		//Continue? //if yes rerun the prompt
		running = confirm("Do you want to Continue")

	}

	alert("Goodbye!");
}

//single call to run the program once 
runProgram();
