var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
	res.send('EXPRESS YOURSELF!');
})

//tip calculator
app.get('/tip/:total/:tip', function(req, res){
	var total = req.params.total;
	var tip = req.params.tip;

	var returnAmt = total * tip /100

	res.send("$"+returnAmt.toFixed(2));

});

//magic 8 ballz
app.get('/magic/:q', function(req,res){
	magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

	var randomIndex = Math.floor(Math.random()*magicArray.length);

	res.send(magicArray[randomIndex]);

});

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

app.get('/fibonacci/:num', function(req, res){
	var number = req.params.num;

	if(isFib(number) == true){
		var fibArray = [];

		for(var i=0; fibR(i)<=number; i++){
			fibArray.push(i +": " + fibR(i));
		}



		var fibString = fibArray.join("<br>")

		res.send(fibString);
	}

	res.send("no fib for you!");



})

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








