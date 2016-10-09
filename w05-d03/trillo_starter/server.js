var express        = require('express');
var logger         = require('morgan');
var path           = require('path');
var exphbs         = require('express-handlebars');
var flatfile       = require('flatfile');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger('dev'));

app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));

app.listen(3000);

// MAKE ALL YOUR ROUTES BELOW

//Root level route
//should render database using home view
//if cards = undefined, do an init
app.get('/', function(req, res){

	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		//if cards = undefined, do an init
		if (data.cards === undefined){
			data.cards = [];
		}

		data.save(function(err){
			res.render('home', data);
		});
	});
});

//post a new card
app.post('/newCard', function(req, res){
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		//2 keys, task from form, key done, init to false
		var newCard = {task: req.body.task, done: false}
		
		//creat a new card in db
		data.cards.push(newCard);

		//after save res.redirct('/')
		data.save(function(err){
			res.redirect('/');
		});
	});
})

//app put /:cardIndex

app.put('/:cardIndex', function(req, res){
	
	var index = req.params.cardIndex;

	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		//grab the card at particular index
		//set done to true
		data.cards[index].done = true;

		//after save res.redirct('/')
		data.save(function(err){
			res.redirect('/');
		});
	});	
});

app.delete('/:cardIndex', function(req, res){
	
	var index = req.params.cardIndex;

	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		//grab the card at particular index
		//remove from database, splice
		data.cards.splice(index, 1);

		//after save res.redirct('/')
		data.save(function(err){
			res.redirect('/');
		});
	});	
});
