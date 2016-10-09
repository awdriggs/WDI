var express = require('express');
var app = express();
var logger = require('morgan');

app.listen(3000);

app.use(logger('dev'));

app.get('/', function(req, res){
	res.send("Welcome to the Zoo");
});

app.get('/:genus/:species', function(req, res){
	var thisGenus = req.params.genus;
	var thisSpecies = req.params.species;
	res.send("This " + thisGenus + " is a " + thisSpecies);
});
