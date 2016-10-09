// The sum of the squares of the first ten natural numbers is

//compute the sum of the squares
function sumOfSquares(max){
	var sum = 0;

	for(var i = 0; i <= max; i++){
		sum += Math.pow(i, 2);
	}

	return sum;
}

console.log(sumOfSquares(100));

//compute the square of the sum
function squareOfSum(max){
	var sum = 0;

	for(var i = 0; i <= max; i++){
		sum += i;
	}

	return Math.pow(sum, 2);
}

console.log(squareOfSum(100));

//compute the difference of the square of the sums and the sum of the squares
function sumSquareDifference(num){
	//find the square of the sum of num
	var numSquaredSum = squareOfSum(num); 

	//fin the sum of the squares of num
	var numSumOfSquares = sumOfSquares(num);

	return numSquaredSum - numSumOfSquares; 
}

console.log(sumSquareDifference(100));

// //same problem with a while loop

// // var sumSquDif = function (num) {
// //     var sumOfSqu = 0;
// //     var sumOfNum = 0;
// //     while (num > 0){
// //         sumOfSqu += (num * num);
// //         sumOfNum += num;
// //         num = num - 1;
// //     };
// //     return ((sumOfNum*sumOfNum) - sumOfSqu);
// // };
// //sumSquDif (100)

