var pg = require('pg');

var connectionString = "pg://localhost/inventory_manager_db";

var route = process.argv[2];
var dt = process.argv[3]

if (route === 'get' && dt === 'products') {
    pg.connect(connectionString, function(err, client, done) {
        //this is for debugging, no necessary
        if (err) {
            return console.err('error fetching client from pool ', err);
        }
        client.query('SELECT * FROM products', function(err, result) {
            //this is for debugging, no necessary
            if (err) {
                return console.error('error running query', err);
            }
            done();
            console.log(result.rows);
        });
    });
}

if (route === 'post' && dt === 'products') {
	//set variables for the parameters passed in after
    var product = process.argv[4];
    var quantity = process.argv[5];
    var price = process.argv[6];
    var manufacturer = process.argv[7];

    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO products (product, inventory, price, manufacturer) VALUES ($1, $2, $3, $4)', 
        	[product, quantity, price, manufacturer],
            function(err, result) {
                done();
                console.log('added item to db');
            });
    });
}

if (route === 'put' && dt === 'products'){
	var product = process.argv[4];
	var inventory = process.argv[5];
	
	pg.connect(connectionString, function(err, client, done) {
		client.query("UPDATE products SET inventory=$2 WHERE product=$1", 
			[product, inventory], 
			function(err, result) {
				done();
				console.log('updated quantity');
			});
	});
}

if (route === 'delete' && dt === 'products'){
	var product = process.argv[4];
	pg.connect(connectionString, function(err, client, done) {
		client.query("DELETE FROM products WHERE product=$1", 
			[product], 
			function(err, result) {
				done();
				console.log('product deleted');
			});
	});
}