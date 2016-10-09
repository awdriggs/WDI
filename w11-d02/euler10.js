var sum = 0;
var limit = process.argv[2]
var primes = []
//console.log(process.argv[2])

var checkPrime = function(num, divisor) {
	if(num = divisor){
		return true;
	} else if(num % divisor == 0){
		return false;
	}
}

for(var i = 2; i <= limit; i++){
	var status = true;

	for(var j = 2; j < 10; j++){
		//a number that is only divisible by 1 and itself
			status = checkPrime(i, j);
			console.log(status);
			if(status == false){
				break;
			}
		//
	}

	if(status == true) {
		primes.push(i);
	}
}



console.log(primes);

// for (i = 0; i < 10; i++) {
//     if (i === 3) { 
//     	break; 
//     } else {
//     	console.log("The number is " + i);	
//     }
    
// }