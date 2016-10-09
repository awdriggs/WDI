var express        = require('express');
var logger         = require('morgan');
var path           = require('path');
var exphbs         = require('express-handlebars');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var pg             = require('pg');

var app = express();

// Setting up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Allows us to use req.body
app.use(bodyParser.urlencoded({extended: true}));
// Loads static files
app.use(express.static('public'));
app.use(logger('dev'));

// Allows us to use methods PUT and DELETE for forms
app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));

app.listen(3000);

//connection string to connect to our database
var connectionString = "pg://localhost/petshop_db";

// routes

// * get - `'/'` - renders an empty home route.
app.get('/', function (req, res){
	res.render('home');
})

// get all cats
app.get('/cats', function (req, res){
		pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM cats', function (err, result) {
			done();
			var data = { cats: result.rows };
			res.render('cats', data);
		});
	});
});

//get all dogs
app.get('/dogs', function (req, res){
		pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM dogs', function (err, result) {
			done();
			var data = { dogs: result.rows };
			res.render('dogs', data);
		});
	});
});

//get new cat form
app.get('/cats/new', function (req, res){
	res.render('newCat');
});

//create a cat
app.post('/newCat', function (req, res){
	var name = req.body.name;
	var adopted = false;
	var age = req.body.age;
	var fee = req.body.fee;

	pg.connect(connectionString, function (err, client, done){
		client.query('INSERT INTO cats (name, adopted, age, adoption_fee) VALUES ($1, $2, $3, $4)',
			[name, adopted, age, fee], function (err, result) {
				done();
				res.redirect('/cats');
			});
	});
});


//go to new dog form
app.get('/dogs/new', function (req, res){
	res.render('newDog');
});

//create a dog
app.post('/newDog', function (req, res){
	var name = req.body.name;
	var adopted = false;
	var age = req.body.age;
	var fee = req.body.fee;

	pg.connect(connectionString, function (err, client, done){
		client.query('INSERT INTO dogs (name, adopted, age, adoption_fee) VALUES ($1, $2, $3, $4)',
			[name, adopted, age, fee], function (err, result) {
				done();
				res.redirect('/dogs');
			});
	});
});

// * get - `'/cats/edit/:id'` - should render a form filled in with all of the cats information for editing
app.get('/cats/edit/:id', function (req, res){
	var index = req.params.id;
	pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM cats WHERE id=$1', [index], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('editCat', data);
		});
	});
});

app.put('/cats/:id', function (req, res){
	var index = req.params.id;
	var name = req.body.name;
	var adopted = req.body.adopted;
	var age = req.body.age;
	var fee = req.body.fee;

	pg.connect(connectionString, function (err, client, done){
		client.query('UPDATE cats SET name=$2, adopted=$3, age=$4, adoption_fee=$5 WHERE id=$1',
			[index, name, adopted, age, fee],
			function (err, result) {
				done();
				res.redirect('/cats');
			});
	});
});

app.get('/dogs/edit/:id', function (req, res){
	var index = req.params.id;
	pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM dogs WHERE id=$1', [index], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('editDog', data);
		});
	});
});

app.put('/dogs/:id', function (req, res){
	var index = req.params.id;
	var name = req.body.name;
	var adopted = req.body.adopted;
	var age = req.body.age;
	var fee = req.body.fee;

	pg.connect(connectionString, function (err, client, done){
		client.query('UPDATE dogs SET name=$2, adopted=$3, age=$4, adoption_fee=$5 WHERE id=$1',
			[index, name, adopted, age, fee],
			function (err, result) {
				done();
				res.redirect('/dogs');
			});
	});
});

// * delete - `'/cats/:id' - should delete all of the cats from the db based on the id and redirect to the cats page
app.delete('/cats/:id', function (req, res){
	var index = req.params.id;
	
	pg.connect(connectionString, function (err, client, done) {
		client.query('DELETE FROM cats WHERE id=$1', [index], function (err, result){
			done();
			res.redirect('/cats');
		});
	});	
});

// * delete - `'/dogs/:id' - should delete all of the dogs from the db based on the id and redirect to the dogs page
app.delete('/dogs/:id', function (req, res){
	var index = req.params.id;
	
	pg.connect(connectionString, function (err, client, done) {
		client.query('DELETE FROM dogs WHERE id=$1', [index], function (err, result){
			done();
			res.redirect('/dogs');
		});
	});	
});