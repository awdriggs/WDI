var express = require('express');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var pg = require('pg');

var app = express();

//setting up handlebars
app.engine('handlebars', exphbs({extname: 'handlebars', defaultLayout: 'main.handlebars'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//allows use of req.body
app.use(bodyParser.urlencoded({extended: true}));
//loads static resources
app.use(express.static('public'));
app.use(logger('dev'));

//allows use of PUT and DELETE for forms
app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body == 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method;
    }
}));

app.listen(3000);

//connection string to connect to our database
var connectionString = "pg://localhost/inventory_manager_db";

// ROUTES!!!

//home route
app.get('/', function(req, res) {
	res.render('home');
});

//render all products
app.get('/products', function (req, res){
	pg.connect(connectionString, function (err, client, done){
		client.query('SELECT * FROM products', function (err, result) {
			done();
			var data = { products: result.rows };
			res.render('products', data);
		});
	});
});

//edit page
app.get('/product/edit/:id', function (req, res){
	var index = req.params.id;

	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM products WHERE id=$1', [index], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('productEdit', data);
		});
	});
});

//update a product
app.put('/products/:id', function (req, res){
	var index = req.params.id;
	var product = req.body.product;
	var manufacturer = req.body.manufacturer;
	var inventory = req.body.inventory;
	var price = req.body.price;

	pg.connect(connectionString, function (err, client, done) {
		client.query('UPDATE products SET product=$2, manufacturer=$3, inventory=$4, price=$5 WHERE id=$1', [index, product, manufacturer, inventory, price], function (err, result) {
			done();
			res.redirect('/products');
		});
	});
});

//delete a product
app.delete('/products/:id', function (req, res){
	var index = req.params.id;
	
	pg.connect(connectionString, function (err, client, done) {
		client.query('DELETE FROM products WHERE id=$1', [index], function (err, result){
			done();
			res.redirect('/products');
		});
	});	
});

//new product route
app.get('/products/new', function (req, res){
	res.render('productNew');
});

//add a new product
app.post('/products/add', function (req, res){
	//from request
	var product = req.body.product;
	var manufacturer = req.body.manufacturer;
	var inventory = req.body.inventory;
	var price = req.body.price;

	pg.connect(connectionString, function (err, client, done) {
		client.query('INSERT INTO products (product, manufacturer, inventory, price) VALUES ($1, $2, $3, $4)',
		 [product, manufacturer, inventory, price], function (err, result){
		 	done();
		 	res.redirect('/products');
		 });
	});
});

//get all the employees
app.get('/employees', function (req, res){
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM employees', function (err, result) {
			done();
			var data = {employees: result.rows};
			res.render('employees', data);
		});
	});
});

//new employee
app.get('/employees/new', function(req, res){
	res.render('employeeNew');
});

//edit page
app.get('/employee/edit/:id', function (req, res){
	var index = req.params.id;

	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM employees WHERE id=$1', [index], function (err, result) {
			done();
			var data = result.rows[0];
			res.render('employeeEdit', data);
		});
	});
});

//edit an employee
app.put('/employees/:id', function (req, res){
	var index = req.params.id;
	//from request
	var first = req.body.firstname;
	var last = req.body.lastname;
	var hours = req.body.hours;
	var fulltime = true;
	var salary = req.body.salary;

	pg.connect(connectionString, function (err, client, done) {
		client.query('UPDATE employees SET first_name=$2, lastname=$3, hours=$4, full_time=$5, salary=$6 WHERE id=$1', 
			[index, first, last, hours, fulltime, salary], 
			function (err, result) {
				done();
				res.redirect('/employees');
			});
	});
});


//add a new employee
app.post('/employees/add', function (req, res){
	//from request
	var first = req.body.firstname;
	var last = req.body.lastname;
	var hours = req.body.hours;
	var fulltime = true;
	var salary = req.body.salary;

	pg.connect(connectionString, function (err, client, done) {
		client.query('INSERT INTO employees (first_name, lastname, hours, full_time, salary) VALUES ($1, $2, $3, $4, $5)',
			[first, last, hours, fulltime, salary], 
		 	function (err, result){
		 		done();
		 		res.redirect('/employees');
		 	});
	});
});

//delete an employee FIRE!
app.delete('/employees/:id', function (req, res){
	var index = req.params.id;
	
	pg.connect(connectionString, function (err, client, done) {
		client.query('DELETE FROM employees WHERE id=$1', [index], function (err, result){
			done();
			res.redirect('/employees');
		});
	});	
});

//get all the invoices
app.get('/invoices', function (req, res){
	pg.connect(connectionString, function (err, client, done) {
		client.query('SELECT * FROM invoices', function (err, result) {
			done();
			var data = {invoices: result.rows};
			res.render('invoices', data);
		});
	});
});





























