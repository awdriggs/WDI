//create express app
const flatfile = require('flatfile');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');

app.use(logger('dev'));
app.listen(3000);
app.use(bodyParser.urlencoded({
    extended: true
}));
//use static
app.use(express.static('public'));

//init handlebars
app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultLayout: 'main.handlebars'
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

//Routes
//get /
//get all the contents of the data.json
//render using home.handlebars
app.get('/', function(req, res) {
    flatfile.db('data.json', function(err, data) {
        //if there is no tweed array, make it!
        if (data.hist == undefined) {
            data.hist = [];
        }

        //reverse history, newest tweeds up top
        data.hist.reverse();
        res.render('home', data);
    }) //end of flatfile
});

//post /newtweed
//create a new tweed in data.json, use flatfile
//save flatfile
//render using onetweed.handlebars, make sure to pass data
app.post('/newTweed', function(req, res) {
    var formData = req.body;

    flatfile.db('data.json', function(err, data) {
        if (data.hist == undefined) {
            data.hist = [];
        }

        //push tweed data to hist array
        data.hist.push(formData);

        data.save(function(err) {
            if (err) throw err;
        });
        var lastIndex = data.hist.length-1;
        var pass = data.hist[lastIndex]
        res.render('oneTweed', pass);
    });
});


//this route will hit the entire data.json, for testing
app.get('/db', function(req, res) {
    flatfile.db('data.json', function(err, data) {
        res.send(data)
    });
});