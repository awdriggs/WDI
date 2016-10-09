// ## Step 1

// Create a three new train objects, one for each of the trains lines we have
// been using. Each of the trains should have the following attributes and
// behaviors.

// Attributes
// * `name` - string, name of the line (can be one character) stations` - array
// * `of station names

// Behaviors
 
// * - log all the stations on the line to the console. 
// * - adds a new station to the line.  Takes the new station's name as a string. 
// * - log the number of stops between two stations to the console. Takes two
// * - arguments, stationStart and stationEnd as the endpoints of the trip.
///////////////////////////////////////////////////
//				Trains Constructor				 //
///////////////////////////////////////////////////
function Trains(line, stops) {
    this.name = line;
    this.stations = stops;
}

///////////////////////////////////////////////////
//			Add Method Prototypes				 //
///////////////////////////////////////////////////
Trains.prototype.listStations = function() {
  return console.log(this.stations.join("\n"));
};

Trains.prototype.addStations =  function (newStation){
	this.stations.push(newStation);
},
Trains.prototype.listStations = function() {
  return console.log(this.stations.join("\n"));
};

Trains.prototype.stopsBtwnStations = function (stationStart, stationEnd){
		var start = this.stations.indexOf(stationStart);
		var end = this.stations.indexOf(stationEnd);

		return end - start - 1;
};	

///////////////////////////////////////////////////
//			CREATE Trains 						 //
///////////////////////////////////////////////////
var l = new Trains("L", ["8th Ave", "6th Ave", "Union Square", "3rd Ave", "1st Ave", "Bedford Ave"]);
var n = new Trains("N", ["Times Square", "Herald Square", "28th st", "23rd st - WHAM Nexus", "Union Square", "8th st"]);
var s = new Trains("S", ["Grand Central", "33rd St", "28th st", "23rd st", "Union Square", "Astor Place"]);



//////////////////////////////////////////////////
//TESTER FUNCTION
//////////////////////////////////////////////////

// l.listStations();
// n.listStations();
// l.addStations("Church");
// l.listStations();
// console.log(l.stopsBtwnStations("Union Square", "Bedford Ave"));
