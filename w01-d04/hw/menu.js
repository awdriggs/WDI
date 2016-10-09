// ## Step 3

// Create a `menu` function.  This function should control the flow of our DAPSTA App.  
// Here is the experience your user should have.  

// 1.  Give the user the choice to view lines, edit lines, or quit.
// 2.  If a user chooses to view lines, log all line names to the console.
// 	* Then allow the user to choose a specific line to see all stations on that line.
// 	* Then allow the user to find the number of stations between two stations.
// 3.  If a user chooses to edit lines, let them choose to add a new station 
// 	to an existing line or add a new line.
// 4.  Let the program run AND REFLECT ALL LINE CHANGES until the program is QUIT.
var menu = function(){
	var viewEditQuit = prompt("Choose from the following \n"
		+"V - View Lines\n" 
		+"E - Edit Lines\n"
		+"Q - Quit");
	
	viewEditQuit = viewEditQuit.toUpperCase();

	if(viewEditQuit == "V"){
		dapstaSystem.linenames();
		
		var userLine = prompt("Enter Line to view All Stations");
		userLine = userLine.toUpperCase();
		dapstaSystem.lines[userLine].listStations();

		var cont = confirm("Do you want to get the distance between two stations?");
		if(cont){
			var getDist = prompt("Enter two station names, seperated by a comma");
				getDist = getDist.split(', ');
				console.log(dapstaSystem.lines[userLine].stopsBtwnStations(getDist[0], getDist[1]));
				menu();
		} else menu();
		 
	} else if(viewEditQuit == "E"){
		var add = prompt("Choose an Option\n" + "A - Add Stations to an Existing Line\n" + "N - Add a New Line");
		add = add.toUpperCase();
		debugger;
		if(add == "A"){
			var userLine = prompt("Enter the line that you want to add a station to");
			userLine = userLine.toUpperCase();

			var newStations = prompt("Enter stations separated by commas");

			//change the string that the user gave to an array
			newStations = newStations.split(', ');
			
			for(var i = 0; i < newStations.length; i++){
				var stationName = newStations[i];
				dapstaSystem.lines[userLine].addStations(stationName);
			}
		
			console.log("New Stations added: " + dapstaSystem.lines[userLine].listStations());

		} else if(add == "N"){
			var userLine = prompt("Enter a single character for the Line Name");
			userLine = userLine.toUpperCase();

			var newStations = prompt("Enter stations separated by commas");

			//change the string that the user gave to an array
			newStations = newStations.split(', ');

			dapstaSystem.addLine(userLine, newStations);

			console.log("New Line added!");
		}
		
		menu();

	} else if(viewEditQuit == "Q"){

	} 
}