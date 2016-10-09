var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var logger = require('morgan');
var path = require('path');


app.engine('handlebars', exphbs({extname: 'handlebars', defaultLayout: 'main.handlebars', layoutsDir: __dirname + '/layouts'}));

//for view engine stetup
app.set('view engine','handlebars');

//makes the hanldebars look for the 'views' folder 
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.listen(3000);

//makes the public folder public, needed for the css
app.use(express.static('public'));

app.get("/", function (req, res){
	res.render('home');
});

app.get("/dogs", function(req, res){
	res.render('dogs');
});

app.get("/cats", function(req, res){
	res.render('cats');
});

app.get("/turtles", function(req, res){
	res.render('turtles');
});

//this will not use the main template!
app.get("/escape", function(req, res){
	res.render('escape', {layout: false});
})

