 ////////////////////////////////////////////////
 /*   Functions   */
 ////////////////////////////////////////////////
//searches the given line for a station
function stationSearch(lineStations, stationToSearch){
	var stationIndex = lineStations.indexOf(stationToSearch)
	return stationIndex;
}

//gets the user input, makes sure it is a line in the system
function promptForLine(){
	var line = prompt("Please choose a train by typing the corresponding character: \n The (L) Train \n The (N) Train \n The (S)ix Train"); 
	
	//make sure user input is in upper case
	line = line.toUpperCase(); 
	
	//make sure the train is in the system
	while(lines.indexOf(line) == -1){
		line = prompt("Not a Valid train line!\nPlease choose a train by typing the corresponding character: \n The (L) Train \n The (N) Train \n The (S)ix Train");
		line = line.toUpperCase();
	}
	return line;
}

 ////////////////////////////////////////////////
 /*   Global Variables */
 ////////////////////////////////////////////////

//the lines that are currently in the system
var lines = ["L", "N", "S"];

//the lists of the stations by each line
var nStations = ["Times Square", "Herald Square", "28th st", "23rd st - WHAM Nexus", "Union Square", "8th st"];
var lStations = ["8th Ave", "6th Ave", "Union Square", "3rd Ave", "1st Ave", "Bedford Ave"]
var sStations = ["Grand Central", "33rd St", "28th st", "23rd st", "Union Square", "Astor Place"]

// A function to get user selection
var userChoice = promptForLine();

//empty array to hold the station list
var stationList = [];

//assign stationList to the correct line based off the user choice.
if(userChoice == "L"){
	stationList = lStations;
} else if(userChoice == "N"){ 
	stationList = nStations;
} else if(userChoice == "S"){
	stationList = sStations;
} 

//Step 3, show selection
// console.log("You entered the " + userChoice + " Train");
// console.log("Making Stops at " + stationList.toString());
// console.log("Thank you for riding!")
// The program should exit???

// Step 4 - Search each line for a specific station
var userStation = prompt("Please enter the name of a station you are searching for");
//console.log(lStations.indexOf("Bedford Ave"));
var searchResult = stationSearch(stationList, userStation);

if(searchResult == -1){
	alert("I didn't find " + userStation + " on the " + userChoice + " line");
} else if(searchResult !== -1){
	alert(userStation + " is on the " + userChoice + " line. It is " + searchResult + " stations away");
}
