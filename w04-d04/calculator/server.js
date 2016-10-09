var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));

//return?one=1&two=2
app.get('/return', function(req, res){
	var operation = req.query.fun;
	var num1 = parseInt(req.query.one);
	var num2 = parseInt(req.query.two);
	var returnAmt = 0;
	
	if(operation == 'addition'){
		returnAmt = num1 + num2;
	} else if(operation == 'subtraction'){
		returnAmt = num1 - num2;
	} else if(operation == 'division'){
		returnAmt = num1 / num2;
	} else if (operation == 'multiplication') {
		returnAmt = num1 * num2; 
	} else if(operation == 'power'){
		returnAmt = Math.pow(num1, num2);
	} else if(operation == 'scinote'){
		returnAmt = num1.toExponential(num2);
	} else if(operation == 'nthroot'){
		returnAmt = Math.pow(num1, 1/num2); //not really working! javascript number fuck?
	}; 
	res.send(returnAmt+'');
});