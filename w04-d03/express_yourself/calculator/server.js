var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
	res.send('calculator!');
})

app.get('/:operation/:one/:two', function(req, res){
	var operation = req.params.operation;
	var num1 = parseInt(req.params.one);
	var num2 = parseInt(req.params.two);
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
	res.send(returnAmt+"");
});