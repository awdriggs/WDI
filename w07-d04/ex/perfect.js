var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var isPerfectSquareArray = function(array) {
	var nArray = []

	for(var i = 0; i < array.length; i++) {
		var s = Math.sqrt(array[i]);
		console.log(s);
		if(s % 1 == 0) {
			nArray.push(array[i]);
		} //anything other than zero means that the num isn't a perfect square
	}

	return nArray;
	
}


var print = isPerfectSquareArray(testArray);
console.log(print);