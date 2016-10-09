// # Exercise: Air Conditioner - 20-30 minutes

// In a new file: `ac.js`

// Using booleans, and conditional statements create an air conditioner program. 
function checkAC(dTemp, cTemp) {
	//If the desired temperature is more than the current temperature, print the following statement to the console: `Turning off the A/C! It's too cold!`, 
	//if the desired temperature is less than the current temperature, print the following statement to the console: `Turning on the A/C! It's boiling in here!`, 
	//else if the temperatures are the same, print the following statement to the console: `A perfect temperature. Keep the cool!`.
	if(dTemp > cTemp){
		alert("Turning off the A/C! It's too cold!");
	} else if(dTemp < cTemp){
		alert("Turning on the A/C! it's boiling");
	} else if(dTemp == cTemp) {
		alert("A perfect temperature. Keep the cool!")
	}
}

//To start it should prompt the user for the current temperature, 
var currentTemp = parseInt(prompt('Input the current temperature'));

//then prompt the user a second time for the temperature they would like it to be. 
var desiredTemp = parseInt(prompt('Input the desired temperature'));

//Check to see if the AC needs to be turned on or not
checkAC(desiredTemp, currentTemp);
