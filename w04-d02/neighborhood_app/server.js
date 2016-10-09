var express = require('express');

var logger = require('morgan');

var app = express();
app.use(logger('dev'));

app.listen(3000);

app.get('/chelsea', function(req, res){
	//get random bar from an array
	res.send(bars.chelsea[Math.floor(Math.random()*bars.chelsea.length)]);
})

app.get('/flatiron', function(req, res){
	//get random bar from an array
	res.send(bars.flatiron[Math.floor(Math.random()*bars.flatiron.length)]);
})

app.get('/eastVillage', function(req, res){
	//get random bar from an array
	res.send(bars.eastVillage[Math.floor(Math.random()*bars.eastVillage.length)]);
})

var bars = {
	flatiron: ['dear iving', 'Raines Law Room', 'The NoMad Bar', 'Flatiron Room'],
	chelsea: ['Coopers Craft Kitchen', 'The Tippler', 'Bar B', 'BathTub Gin', 'Smithfield'],
	eastVillage: ['Proletariat', 'The Wayland', 'Keybar', 'Amor y Amargo', 'Dead Drop']
}