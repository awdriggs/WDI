var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
	res.send('TIP CALCULATOR!');
})

//tip calculator
app.get('/tip/:total/:tip', function(req, res){
	var total = req.params.total;
	var tip = req.params.tip;

	var returnAmt = total * tip /100

	res.send("$"+returnAmt.toFixed(2));

});