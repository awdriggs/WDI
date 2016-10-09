// Loading all our Node Package Modules
var express = require('express');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var pg = require('pg');

var app = express();

// Setting up handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Allows us to use req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
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

// Connection string to connect to our database
var connectionString = "pg://localhost/saucy_db";






//main get routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/manufacturers', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM manufacturers', function(err, result) {
            done();
            var data = {
                manufacturers: result.rows
            };
            res.render('manufacturers', data);
        });
    });
});

app.get('/manufacturers/:id', function(req, res) {
    var index = req.params.id;

    //select the manufactor at the id of index
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT m.id, m.name, s.name AS sauce_name, sp.price FROM manufacturers m left join sauces s on s.manufacturer_id = m.id left join sauce_prices sp on sp.sauce_id = s.id WHERE m.id=$1;', [index], function(err, result) {
            done();
            //console.log(err);
            var data = {
                everything: result.rows,
            };

            //console.log(data);

            res.render('manufacturer', data);
        });
    });
});

app.get('/sauces', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT s.id, m.name, s.name AS sauce_name, sp.price FROM manufacturers m left join sauces s on s.manufacturer_id = m.id left join sauce_prices sp on sp.sauce_id = s.id;', function(err, result) {
            done();
            //console.log(err);
            var data = {
                everything: result.rows,
            };

            //console.log(data);

            res.render('sauces', data);
        });
    });
});

app.get('/customers', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT c.id, c.name, e.email FROM customers c LEFT JOIN customer_emails e on e.customer_id=c.id;', function(err, result) {
            done();

            var data = {
                everything: result.rows,
            };


            res.render('customers', data);
        });
    });
});

app.get('/customers/:id', function(req, res) {
    var index = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT c.id, c.name, e.email FROM customers c LEFT JOIN customer_emails e on e.customer_id=c.id WHERE c.id=$1;', [index], function(err, result) {
            done();

            client.query('SELECT p.id, s.name AS sauce_name, sp.price, p.quantity FROM customer_purchases p LEFT JOIN sauces s ON p.sauce_id=s.id LEFT JOIN sauce_prices sp ON s.id=sp.id WHERE p.customer_id=$1;', [index], function(err, result_p) {

                done();

                var data = {
                    customer: result.rows[0],
                    purchases: result_p.rows
                }

                res.render('customer', data);

            });
        });
    });
});

//new routes
app.get('/new-manufacturer', function(req, res) {
    res.render('new-manufacturer'); //don't need anything
});

app.get('/new-sauce', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM manufacturers', function(err, result) {
            done();

            data = {
                options: result.rows
            }
            res.render('new-sauce', data);

        });
    });
});

app.get('/new-customer', function(req, res) {
    res.render('new-customer');
});

app.get('/new-customer-purchase', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM customers', function(err, result) {

            done();

            //grab the sauces
            client.query('SELECT s.id, s.name AS sauce_name, sp.price FROM sauces s left join sauce_prices sp on sp.sauce_id = s.id;', function(err, result_s) {
                data = {
                    customers: result.rows,
                    sauces: result_s.rows
                };

                res.render('new-customer-purchase', data);
            });
        });
    });
});

//create routes
app.post('/create-manufacturer', function(req, res) {
    var name = req.body.name;

    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO manufacturers (name) values ($1)', [name], function(err, result) {
            done();

            res.redirect('/manufacturers');
        });
    });
});

app.post('/create-sauce', function(req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var manufacturer = req.body.manufacturer;

    console.log(name + ' ' + price + ' ' + manufacturer);

    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO sauces (manufacturer_id, name) VALUES ($1, $2) RETURNING id', [manufacturer, name], function(err, result) {
            console.log(err);
            //done();

            var id = result.rows[0].id;

            client.query('INSERT INTO sauce_prices (sauce_id, price) VALUES ($1, $2)', [id, price], function(err, result_2) {

                done();
                res.redirect('/sauces');
            });
        });
    });
});

app.post('/create-customer', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;

    //console.log(name + " " + email);
    //insert name into customer_name, return the new id
    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO customers (name) VALUES ($1) RETURNING id', [name], function(err, result) {

            done();

            var id = result.rows[0].id;

            //insert email into customer, use the returned email as the email cusomter_id
            client.query('INSERT INTO customer_emails (customer_id, email) VALUES ($1, $2)', [id, email], function(err, result) {
                res.redirect('customers');
            });
        });

    });
});


app.post('/create-customer-purchase', function(req, res) {
    var customer_id = req.body.customer;
    var sauce_id = req.body.sauce;
    var quantity = req.body.quantity;

    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO customer_purchases (customer_id, sauce_id, quantity) VALUES ($1, $2, $3)', [customer_id, sauce_id, quantity], function(err, result) {

            done();

            res.redirect('/customers/' + customer_id);
        });
    })
});

//edit
app.get('/edit-sauce/:id', function(req, res) {
    var index = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT s.id, m.name, s.name AS sauce_name, sp.price FROM manufacturers m left join sauces s on s.manufacturer_id = m.id left join sauce_prices sp on sp.sauce_id = s.id WHERE s.id=$1;', [index], function(err, result) {

            done();

            var data = result.rows[0];
            res.render('edit-sauce', data);
        });
    });
});

app.get('/edit-customer-purchase/:id', function(req, res) {
    var index = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT p.id, c.name, c.id AS customer_id, s.name AS sauce_name, s.id AS sauce_id, p.quantity FROM customer_purchases p LEFT JOIN sauces s ON s.id=p.sauce_id LEFT JOIN customers c ON c.id = p.customer_id WHERE p.id=$1;', [index], function(err, result) {

            done();

            //grab the customers
            client.query('SELECT * FROM customers', function(err, result_c) {

                done();

                //grab the sauces
                client.query('SELECT s.id, s.name AS sauce_name, sp.price FROM sauces s left join sauce_prices sp on sp.sauce_id = s.id;', function(err, result_s) {
                    data = {
                    	purchase: result.rows[0],
                        customers: result_c.rows,
                        sauces: result_s.rows
                    };
                    console.log(data);
                    res.render('edit-customer-purchase', data);
                });
            });
        });
    });

});

app.get('/edit-customer/:id', function(req, res) {
    var index = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT c.id, c.name, e.email FROM customers c LEFT JOIN customer_emails e on e.customer_id=c.id WHERE c.id=$1;', [index], function(err, result) {

            done();

            var data = result.rows[0];
            console.log(data);
            res.render('edit-customer', data);
        });
    });

});

app.get('/edit-manufacturer/:id', function(req, res) {
    var index = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT name, id FROM manufacturers WHERE id=$1', [index], function(err, result) {

            done();

            var data = result.rows[0];
            console.log(data);
            res.render('edit-manufacturer', data);
        });
    });

});

//update routes
app.put('/update-sauce/:id', function(req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;

    //update the name
    pg.connect(connectionString, function(err, client, done) {
        client.query('UPDATE sauces SET name=$2 WHERE id=$1;', [id, name], function(err, result) {
            done();
        });

        //update the price
        client.query('UPDATE sauce_prices SET price=$1 WHERE sauce_id=$2;', [price, id], function(err, result) {
            done();

            res.redirect('/sauces');
        })

    })

});

app.put('/update-customer-purchase/:id', function(req, res) {


});

app.put('/update-customer/:id', function(req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;

    //update the name
    pg.connect(connectionString, function(err, client, done) {
        client.query('UPDATE customers SET name=$2 WHERE id=$1;', [id, name], function(err, result) {
            done();
        });

        //update the price
        client.query('UPDATE customer_emails SET email=$1 WHERE customer_id=$2;', [email, id], function(err, result) {
            done();

            res.redirect('/customers');
        });
    });
});

app.put('/update-manufacturer/:id', function(req, res) {
    var id = req.body.id;
    var name = req.body.name;

    pg.connect(connectionString, function(err, client, done) {
        client.query('UPDATE manufacturers SET name=$2 WHERE id=$1', [id, name], function(err, result) {
            done();
            res.redirect('/manufacturers');

        });
    });
});

//delete routes
app.delete('/delete-customer/:id', function(req, res) {

});

app.delete('/delete-manufacturer/:id', function(req, res) {

});

app.delete('/delete-sauce/:id', function(req, res) {

});