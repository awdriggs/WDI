var capitalizer = function(aString){
	var nArray = aString.split(" ");

	for(var i = 0; i < nArray.length; i++){
		nArray[i] = nArray[i].charAt(0).toUpperCase() + nArray[i].slice(1);
	}
	return nArray.join(" ");
}

//Testers
// var theRock = "dwayne is the rock";
// theRock = capitalizer(theRock);
// console.log(theRock);

var saysWill = function(aFunction, aString){
	return aFunction(aString) + " says Will";
}

console.log(saysWill(capitalizer, "dwayne the rock"));
