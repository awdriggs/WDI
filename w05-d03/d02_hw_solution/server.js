var express = require('express');
var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var flatfile = require('flatfile');
var bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(logger('dev'));

app.listen(3000);

var methodOverride = require('method-override')
app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

app.get('/', function(req, res) {
    flatfile.db('data.json', function(err, data) {
        if (err) throw err;
        res.render('home', data);
    })
});

app.post('/newTweed', function(req, res) {
    flatfile.db('data.json', function(err, data) {
        if (err) throw err;

        if (data.body === undefined) {
            data.body = [];
        }
        data.body.push(req.body);

        data.save(function(err) {
            if (err) throw err;
        });

        res.render('oneTweed', req.body);
    })
});

app.get('/tweed/:id', function(req, res) {
    var id = req.params.id;

    flatfile.db('data.json', function(err, data) {
        thisTweed = data.body[id];
        thisTweed.id = id; //create a new key in the tweed object;
        res.render('oneTweed', thisTweed);
    });
});

app.get('/tweed/edit/:id', function(req, res) {
    var id = req.params.id;

    flatfile.db('data.json', function(err, data) {
        thisTweed = data.body[id];
        thisTweed.id = id; //create a new key in the tweed object;
        res.render('edit', thisTweed);
    });
});

app.put('/tweed/:id', function(req, res) {
    var id = req.params.id;

    flatfile.db('data.json', function(err, data) {
        var thisTweed = req.body;
        data.body[id] = thisTweed;

        thisTweed.id = id;

        data.save(function(err) {
            if (err) throw err;
        });

        res.render('oneTweed', thisTweed)
    })
});