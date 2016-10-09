//calculator 
// In a new file: `calculator.js`

//check input isn't working!

function checkInput(a){
	if(isNaN(a));
}

// Prompt the user for 3 input values: 2 numbers, and a math operation.
var firstNum = parseInt(prompt("Choose a number"));
var secondNum = parseInt(prompt("Choose another number"));
var operation = prompt("choose an operation: \n -addition \n -subtraction \n -multiplication \n -division \n -exponents");

debugger; 

firstNum = checkInput(firstNum);
secondNum = checkInput(secondNum);

// Define a conditional statement that will perform the following calculator operations:
switch(operation) {
    case "addition":
        console.log(firstNum + secondNum);
        break;
    case "subtraction":
        console.log(firstNum - secondNum);
        break;
    case "multiplication":
    	console.log(firstNum * secondNum);
    case "division":
    	if(secondNum != 0){
    		console.log	(firstNum / secondNum);
    	} else {
    		console.log("Can't divide by 0");
    	}
    	break;
    case "exponents":
    	console.log(Math.pow(firstNum, secondNum));
    	break;
    default:
    	console.log("Enter a valid operation");
}
// * addition
// * subtraction
// * multiplication
// * division
// * exponents

// Can you make sure that 0-division does not occur?
// Can you make sure that if a user does not enter anything the value is set to 0?