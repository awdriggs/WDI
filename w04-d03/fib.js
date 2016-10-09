
var isPerfectSquare = function(num) {
	var s = Math.sqrt(num);
	return s % 1 == 0;
	
}

var isFib = function(num) {
	return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}


var fibR = function(n){
	if(n === 0){
		return 0;
	}
	if(n < 2){
		return 1;
	} else {
		return fibR(n-1)+fibR(n-2);

	}
}
