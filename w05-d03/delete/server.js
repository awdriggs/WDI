var express = require('express');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var flatfile = require('flatfile');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger('dev'));
app.listen(3000);

app.use(methodOverride(function(req, res) {
 if ((req.body && typeof req.body === 'object' && '_method' in req.body)){
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));

app.get('/', function (req, res) {
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;
		res.render('home', data);
	});
});

app.post('/', function (req, res) {
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		data.people.push(req.body)

		data.save(function(err){
			res.render('home', data);
		});
	});
});

app.delete('/:keyToDelete', function (req, res) {
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		data.people.splice(req.params.keyToDelete, 1)

		data.save(function(err){
			res.render('home', data);
		});
	});
});

app.get('/edit/:keyToEdit', function (req, res) {
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		dataObject =
		{
			person: data.people[req.params.keyToEdit],
			keyToEdit: req.params.keyToEdit

		}

		res.render('edit', dataObject);
	});
});

app.put('/update/:keyToUpdate', function (req, res) {
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		data.people[req.params.keyToUpdate] = req.body

		data.save(function(err){
			res.render('home', data);
		});
	});
});














