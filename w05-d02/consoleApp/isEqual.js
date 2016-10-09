var value1 = process.argv[2];
var value2 = process.argv[3];
var value3 = process.argv[4];

if(value1 === value2 && value1 === value3){
	console.log('all equal');
} else {
	console.log('all are not equal');
}