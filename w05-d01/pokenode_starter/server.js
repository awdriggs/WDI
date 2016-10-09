var express = require('express');
var app = express();
var logger = require('morgan');
var pokemons = require('./poke_array.js');
var path = require('path'); //for view engine
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultLayout: 'main.handlebars',
    layoutsDir: __dirname + '/layouts' //you don't need this line if you put the layouts in the views folder
}));

app.use(express.static('public'));

// view engine setup
app.set('view engine', 'handlebars');

//for view engine
app.set('views', path.join(__dirname, 'views')); //for view engine

app.use(logger('dev'));
app.listen(3000);

//pokemons is an array of pokemon objects
var pokemons = require('./poke_array.js');



//ROUTES
app.get("/", function(req, res) {
   res.render('home')
});

//pokemons/searchByName
//find a single pokemon using query, render with pokeInfo
app.get('/pokemons/searchByName', function(req, res){
	var search = req.query.searchName;
	for(var i=0; i<pokemons.length; i++){
		if(pokemons[i].name == search){
			res.render('PokeInfo', pokemons[i]);
		}
	}

	//res.render('PokeInfo', req.query);
});

//pokemons
//get all pokemon from poke object, render with pokemons
app.get('/pokemons/', function(req, res){
	
	var data = {array: pokemons};

	res.render('Pokemons', data);
});


//pokemons/searchByType
//find pokemons that match a given type, render with pokemons
app.get('/pokemons/searchByType', function(req, res){
	var search = req.query.searchType;
	var typeArray = [];
	for(var i=0; i<pokemons.length; i++){
		for(var j=0; j<pokemons[i].type.length; j++){

			if(pokemons[i].type[j] == search){
				typeArray.push(pokemons[i])	
			}	
		}
	}

	var data = {array: typeArray};

	res.render('Pokemons', data);
});

//pokemons/random
//retrieve a random pokemon, render using pokeInfo
app.get('/pokemons/random', function(req, res){
	var randomIndex = Math.floor(Math.random()*pokemons.length);

	res.render('PokeInfo', pokemons[randomIndex]);
});

//pokemons/:id
//get a single poke object, render with pokeinfo
app.get('/pokemons/:id', function(req, res){
	var search = req.params.id;

	for(var i=0; i<pokemons.length; i++){
		if(pokemons[i].id == search){
			res.render('PokeInfo', pokemons[i]);
		}
	}

});

