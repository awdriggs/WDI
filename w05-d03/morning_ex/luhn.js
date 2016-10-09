console.log('luhn working');

var validCard = function(number){
	var sum = 0;
	//change to string, split into an array
	var digits = (""+number).split("");
	console.log(digits);
	var offset = 0;
	
	//if the number is odd, offset by 1
	if(digits.length % 2 != 0){
		offset = 1;
	}
	//loop through the array
	for(var i = digits.length-1; i>=0; i--){
		//change string value to num
		digits[i] = parseInt(digits[i]);

		//if the index value is even, multiple it by 2! index start at 0 stupid
		if((i+offset) %2 == 0){
			digits[i] = digits[i]*2;
		}

		//to add individual digits of two digit numbers
		//ex, two = 10
		var two = digits[i];
		//make into a string
		twoArray = (""+two).split("");
		//loop through the two, add each digit to sum
		for(var j = 0; j<twoArray.length; j++){
			sum += parseInt(twoArray[j]);
		}
	
	}

	console.log(digits);
	console.log(sum);

	if(sum%10 == 0){
		return true;
	} else {return false;}
}




// for testing
console.log(validCard(1234567890123456)); //#should be false
console.log(validCard(4408041234567893)); //#should be true
console.log(validCard(38520000023237)); //#should be true
console.log(validCard(4222222222222)); //#should be true