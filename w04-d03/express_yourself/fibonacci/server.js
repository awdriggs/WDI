var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
	res.send('FIBONACCI');
})

app.get('/fibonacci/:num', function(req, res){
	var number = res.params.num;
})


var isPerfectSquare = function(num) {
	var s = Math.sqrt(num);
	return s % 1 == 0; //anything other than zero means that the num isn't a perfect square
	
}

var isFib = function(num) {
	return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}



