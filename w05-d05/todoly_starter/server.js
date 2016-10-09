var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

var methodOverride = require('method-override');
app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultLayout: 'main.handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.listen(3000);
app.use(express.static('public'));

var pg = require('pg');

// Set Up You Node App
var client = new pg.Client({
    username: '',
    password: '',
    database: 'todoly_db',
    host: 'localhost',
    port: 5432
});
client.connect();

app.get('/', function(req, res) {

    client.query('SELECT * FROM todos ORDER BY completed', function(err, result) {
        var data = {
            list: result.rows
        };
        res.render('home', data);
    });
})

// Destroy

app.delete('/items/:id', function(req, res) {
    // Will delete an item from your db based on its id and render home
    var index = req.params.id;

    client.query("DELETE FROM todos WHERE id = ($1);", [index]);
    res.redirect('/');

});

app.get('/items', function(req, res) {
    //  will get all of your items from the db and render the home page

    //show all the items in the db
    res.redirect('/');
});

// Show a single task
app.get('/items/:id', function(req, res) {
    // Will get one item from your db based on its id and render one item

    //SELECT row based on its id
    var index = req.params.id;
    client.query("SELECT * FROM todos WHERE id = ($1);", [index], function(err, result) {
        var single = result.rows[0];

        res.render('single', single);
    });
});

app.post('/items', function(req, res) {
    var taskFromForm = req.body.task;

    client.query("INSERT INTO todos (task, completed) VALUES($1, false);", [taskFromForm]);

    res.redirect('/');
});

app.put('/done/:id', function(req, res) {
    //Will update an item in your db based on its id and render home
    var index = req.params.id;

    client.query("UPDATE todos SET (completed) = (true) WHERE id = ($1);", [index]);
    res.redirect('/');
});

app.put('/undone/:id', function(req, res) {
    //Will update an item in your db based on its id and render home
    var index = req.params.id;

    client.query("UPDATE todos SET (completed) = (false) WHERE id = ($1);", [index]);
    res.redirect('/');
});

//this is for testing method override, should never be hit
app.post('/items/:id', function(req, res) {
    res.send('hitting post!!!');
});