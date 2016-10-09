var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path'); //for view engine
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultLayout: 'main.handlebars',
    layoutsDir: __dirname + '/layouts'
}));

// view engine setup
app.set('view engine', 'handlebars');

//for view engine
app.set('views', path.join(__dirname, 'views')); //for view engine

app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));

app.get("/", function(req, res) {

    res.render('make');
});

app.get("/show-sandwich", function(req, res){
	
	//this sends the entire req.query object to the view
	res.render('sandwich', req.query);
})