var express = require('express');
var app = express();
var logger = require('morgan');
var pokemons = require('./poke_array.js');
var path = require('path'); //for view engine
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({extname:'handlebars', defaultLayout:'main.handlebars', layoutsDir: __dirname + '/layouts'}));

// view engine setup
app.set('view engine', 'handlebars');

//for view engine
app.set('views', path.join(__dirname, 'views')); //for view engine

app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));

app.get("/", function (req, res) {
  var data = {dudeSays: 'broooo'};

  res.render('home', data);
});

app.get('/complex', function(req, res){
  var data = {
    name: 'Peteza Stromboli',
    address: {
      streetName: 'pizza ln',
      streetNumber: '411',
      floor: 4,
      addressType: {
        typeName: 'restaurant'
      }
    }
  };
  res.render('complex', data);
});

app.get('/loop', function(req, res){
  var luna = [
    {name: 'Lebron James', team: 'the Heat'},
    {name: 'Kevin Durant', team: 'the Thunder'},
    {name: 'Kobe Jordan',  team: 'the Lakers'}
  ];
  
  var ranchy = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Funday'
  ];

  var skywalkerCats = [
  	{ belongsTo: 'Seinna', name: 'Goliath', real: true, personality: ['fun', 'crazy', 'cool']},
  	{ belongsTo: 'Tom', name: 'Luna', real: true, personality: ['awesome', 'good', 'great']},
  	{ belongsTo: 'Wong', name: 'Ranchie', real: false, personality: ['scary', 'strong', 'ghost']} 
  ]
  
  var wongsAwesome = {
    basketballPlayers: luna,
    days: ranchy,
    cats: skywalkerCats
  };
  
  res.render('loop', wongsAwesome);
});

app.get('/logic', function(req, res){
  var data = {
    upIsUp: true,
    downIsUp: false,
    skyIsBlue: "yes"
  };
  
  res.render('logic', data);
});
