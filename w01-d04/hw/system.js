
// ## Step 2

// Create an object called `dapstaSystem`.  This will represent the entire DAPSTA System.  
// The object should have the following attributes and behaviors:

// **Attributes**

// * `lines` : an object literal with the line names as a property and a line object as a value.

// **Behaviors**

// * `linenames()`: logs all of the line names in DAPSTA to the console.
// * `addLine(lineName, arrayOfStationNames)`: adds a new line to the system with station names.  
// Takes two arguments, the name of the new line and an array of the stations on that line.

var dapstaSystem = {
	lines : {
		S: s,
		N: n,
		L: l
	},

	linenames : function() {
			console.log(Object.keys(this.lines).join("\n"));
	},

	addLine : function(lineName, arrayOfStationNames) {
		//had to use the [] notation around filename to get this to work
		//this.lines.lineName = new Trains(lineName, arrayOfStationNames)
		this.lines[lineName] = new Trains(lineName, arrayOfStationNames)
	}

}

// TESTER
// dapstaSystem.linenames();
// 5dapstaSystem.addLine("Q", ["church", "parkside", "prospect", "7th Ave", "Atlantic Ave" ]);
// dapstaSystem.linenames();