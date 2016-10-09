// ---------------------------
// exercise time - 10 minutes - GO GO GO PUSH YOURSELVES
// ---------------------------

// var add = function(a, b, c) {
// 	var result = a + b + c;
// 	return result;
// }

// var vowelCount = function(message) {
// 	var userInput = message;
// 	var vowels = ['a', 'e', 'i', 'o', 'u'];
// 	var outputVowels = "";

// 	for(var i = 0; i < userInput.length; i++){
// 		var current = userInput.charAt(i);
// 		if(vowels.indexOf(current) !== -1){
// 			outputVowels = outputVowels + current;
// 		}
// 	}

// 	return outputVowels.length;
// }

// function stringCounter() {
//     var counter = 0;
//     var countArray = [];
//     for (i = 0; i < arguments.length; i++) {
//         var currentArg = arguments[i];
//         console.log(currentArg);
//         counter = vowelCount(currentArg);
//         countArray.push(counter);
//     }
//     return countArray;
// }

// console.log(vowelCount(prompt("input a message!")));

// var x = stringCounter("abc", "io3", "hello world");
// console.log(x);

// ---------------------------
// exercise time - 10 minutes - GO GO GO PUSH YOURSELVES
// ---------------------------
// ###Exercise 1: callback me maybe  // create a function called telephone
//that logs "867-5309" when called. Write a seperate function called Blondie
//that takes a function as a parameter. Blondie should log "call me on the line
//at " when called, and then execute any function passed to it.

var telephone = function() {
	return "867-5309";
}

var blondie = function(func) {
	var number = func();
	console.log("call me on the line at "+ number);
	
	
}

blondie(telephone);







