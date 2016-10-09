// Round 0

// Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
function lengths(aArray){
	lengthsArray = [];

	for(var i = 0; i<aArray.length; i++){
			lengthsArray.push(aArray[i].length);
	}
	return lengthsArray;
}

//Round 0 Test
console.log("Round 0 Test")
var words = ["hello", "what", "is", "up", "dude"]
console.log(lengths(words));  



//Round 1
//Fizzbuzz function that returns fizz if divisible by 3, 
//buzz if divisible by 5, and fizzbuzz if a both 3 and 5 are divisible

function fizzer(testNum){

    if((testNum%3 == 0) && (testNum%5 == 0)){
        return ("FizzBuzz");
    } else if(i%3 == 0) {
        return ('Fizz');
    } else if(i%5 == 0){
        return ('Buzz');
    } else {
        return "Skywalker";
    }
}

// Round 1 Test
console.log("Round 1 Test");
for(var i = 1; i < 15; i++){
	console.log(i + " " + fizzer(i));
}

//Round 2
//function takes three arguments, multiplies the first two then raises to the power of the 
//third argument.
function transmogrifier(a, b, c){
	return Math.pow((a*b), c);
}

// Round 2 Test
console.log("Round 2 Test");
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

//Round 3
//takes a string and returns a new string that has been given a looney tunes accent
function toonify(accent, sentence){
	var newSentence = '';
	
	if(accent == 'daffy'){
		
		for(var i = 0; i < sentence.length; i++){
			var current = sentence[i];

			if(current == 's') {
				current = 'th';	
			} 

			newSentence = newSentence + current;
		}

	} else if(accent == 'elmer') {
		for(var i = 0; i < sentence.length; i++){
			var current = sentence[i];

			if(current == 'r') {
				current = 'w';	
			} 

			newSentence = newSentence + current;
		}
	} else {
		newSentence = sentence;
	}
	return newSentence;
}


//Round 3 test
console.log("Round 3 Test");
console.log(toonify("daffy", "so you smell like sausage"));
console.log(toonify("elmer", "i think i smell a rabbit"));


// ### Round 4
// Write a function `digitSum` that accepts a number and returns the sum of its digits.  
function digitSum(aNum){
	output = [];

	//convert the digits to a string
	sNum = aNum.toString();

	var sum = 0;

	//write the string to an array, the + forces a number, don't know why
	for(var i = 0; i < sNum.length; i++){
		output.push(+sNum.charAt(i));
	}

	//loop through output, adding the digit to the sum
	for(var i = 0; i < output.length; i++){
		sum += output[i];
	}

	return sum;
}

//Round 4 Test
console.log("Round 4 Test");
var num = 42;
console.log(digitSum(num));

// ### Round 5
// accepts a single string argument. Return the reversed order

function wordReverse(aString){
	var nArray = [];
	//splits a string into an array
	var aArray = aString.split(" ");

	//step backwards through array and push the items to the array
	for(var i = 0; i < aArray.length; i++){
		nArray.unshift(aArray[i]);
	}
	
	//join the elements in the array without a comma
	return nArray.join(" ");
}

//Round 5 test
console.log("Round 5 Test");
var word = wordReverse("Luke I am your father");
console.log(word);

// ### Round 6
//letterReverse accepts a single argument, a string. 
//The function maintains the order of words in the string but reverses the 
//letters in each word.

function letterReverse(aString){
	//split the string, store each word into an array
	var aArray = aString.split(" ");

	//empty holder for the new array
	var nArray = [];

	//step backwards through array and push the items to the array
	for(var i = 0; i < aArray.length; i++){
		var nString = ""
		for(var j = aArray[i].length; j >= 0; j--){
			var current = aArray[i].charAt(j);
			nString += current;
		}
		nArray.push(nString);
	}
	
	//join the elements in the array without a comma
	return nArray.join(" ");
}

console.log("Round 6 Test");
console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));

// ### Round 7

// Write a function `longest` that accepts a single argument, an array of strings. The method
// should return the longest word in the array. In case of a tie, the method should
// return the word that appears first in the array.
function longest(aArray){
	longestWord = ""

	for(var i = 0; i<aArray.length; i++){
		if(aArray[i].length > longestWord.length){
			longestWord = aArray[i];
		}
	}
	return longestWord;
}

//Round 7 Test
console.log("Round 7 Test");
console.log(longest(["return", "of", "the", "jedi"])); 
console.log(longest(["mark", "hamill", "played", "luke", "skywalker"]));



// ### Final Round

// Write a function, called `repMaster`, that accepts two arguments, 
//input and a function. Input should be able to be used with the function.  
//The function used as an argument must return a string.  `repMaster` 
//should take the result of the string, passed as an argument to the 
//argument function, and return this result with `' proves that I am the rep MASTER!'` 
//concatenated to it.  

function repMaster(aString, aFunction){
	var message = aFunction(aString);
	return message + " proves that I am the rep Master!";
}

//final round test
console.log("Final Round Test");
console.log(repMaster("Put Hans back on the line", wordReverse));

