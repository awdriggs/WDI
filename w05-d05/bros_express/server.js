var express = require('express');
var app = express('express');
var looger = require('morgan');
var exphbs = require('express-handlebars');
var pg = require('pg'); //for postgreSQL

app.user(logger('dev'));
app.listen(3000);
app.use(express.static('public'));

app.engine('handlebars', exphbs({
	extname: 'handlebars',
	defaultLayout: 'main.handlebars'
}));

var client = new pg.Client({
    username: 'pavankatepalli',
    password: '',
    database: 'bros',
    host: 'localhost',
    port: 5432
});

client.connect();

client.query('SELECT * FROM bros_and_broettes', function(err, result){
    console.log(result.rows);

    client.end();
});

