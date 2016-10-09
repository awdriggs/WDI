//Set up your express app
//Be sure to require all the proper files
var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

//pokemons is an array of pokemon objects
var pokemons = require('./poke_array.js');


//Write a route for '/' this route should just have a welcome message
app.get('/', function(req, res){
	res.send("Welcome to the Pokemon Yellow Pages!");
});


//Write a route '/pokemons' that will send all the pokemon back to the browser
app.get('/pokemons', function(req, res){
	res.send(pokemons);
});

//Write a route '/pokemons/searchByName/:name' that will allow you to return a pokemon by name
app.get('/pokemons/searchByName/:name', function(req, res){
	var search = req.params.name;
	for(var i=0; i<pokemons.length; i++){
		if(pokemons[i].name == search){
			res.send(pokemons[i]);
		} else res.send("No Pokemon with that name found!");
	}
});

//Write a route '/pokemons/searchByType/:type' that will return all the pokemons of a specific type back
app.get('/pokemons/searchByType/:type', function(req, res){
	var search = req.params.type;
	var typeArray = [];
	for(var i=0; i<pokemons.length; i++){
		for(var j=0; j<pokemons[i].type.length; j++){

			if(pokemons[i].type[j] == search){
				typeArray.push(pokemons[i])	
			}	
		}
	}

	if(typeArray.length == 0){
		res.send("No Pokemons with that type found!");
	} else {
		res.send(typeArray);	
	}
});

//Write a route '/pokemons/random' that will return a random pokemon
app.get('/pokemons/random', function(req, res){
	var randomIndex = Math.floor(Math.random()*pokemons.length);

	res.send(pokemons[randomIndex]);
});

//Write a route '/pokemons/:id' that will return a specific pokemon by its id
app.get('/pokemons/:id', function(req, res){
	var search = req.params.id;

	for(var i=0; i<pokemons.length; i++){
		if(pokemons[i].id == search){
			res.send(pokemons[i]);
		}
	}

	res.send('No Pokemon with that ID');

});
