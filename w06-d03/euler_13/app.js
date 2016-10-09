console.log('app.js working');

var numArray = ['37107287533902102798797998220837590246510135740250', 
				'46376937677490009712648124896970078050417018260538'];

// console.log(numArray.length);
// console.log(numArray[0].length);



for(var i = 49; i>=0; i--){
		
	for(var j = 0; j < numArray.length; j++){
		var digit = parseInt(numArray[j].charAt(i));
		
		placeSum += digit;
	}

	

	console.log(placeSum);


}

// for(var i = 5; i >= 0; i--){
// 	console.log("i" + i);
// 	for(var j = 0; j < 5; j++){
// 		console.log("j" + j);
// 	}
// }