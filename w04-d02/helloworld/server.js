var express = require('express');
var app = express();

app.listen(3000); //port number, typically 3000

app.get('/', function (request, response) {
	response.send("hello")
});

app.get('/ham', function (request, response) {
	response.send("Dominique likes ham")
});

app.get('/bunnies', function (request, response) {
	response.send("Bunnies!!")
});