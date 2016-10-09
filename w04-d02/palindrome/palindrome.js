console.log('palindrome.js working');

// var isPalindrome = function(aString){
// 	//split splits a string by a delimiting, '' will split each character, makes array
// 	//reverse, reverses the array
// 	//join, takes an array an joins a string by the delimiting
// 	aString = aString.toLowerCase();
// 	var removeSpaces = aString.split(" ").join("");
// 	var reversed = removeSpaces.split("").reverse().join("");
// 	return reversed === removeSpaces;
// }

// check with a phrase with punctuation
var isPalindrome = function(aString){
	aString = aString.toLowerCase();
	debugger;
	
	var removePunctuation = aString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");

 	//split splits a string by a delimiting, '' will split each character, makes array
	//reverse, reverses the array
	//join, takes an array an joins a string by the delimiting
	
	var removeSpaces = removePunctuation.split(" ").join("");
	var reversed = removeSpaces.split("").reverse().join("");
	return reversed === removeSpaces;
}
