var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');

app.listen(3000);

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(logger('dev'));

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// ROUTES ////////////////////////////////////////////////////////////////////////////////////

// HOME

app.get('/', function(req, res) {
    res.render("home");
});

// ARTISTS // INDEX 
app.get('/artists', function(req, res) {
    db.all('artists', function(artists) {

        var data = {
            artists: artists
        }

        res.render('artistsIndex', data);
    });
});

// ARTISTS // NEW
app.get('/artists/new', function(req, res) {
    res.render('artistNew');
});

// ARTISTS // SHOW
app.get('/artists/:id', function(req, res) {
    var index = req.params.id;
    db.find('artists', index, function(artist) {
        db.findRelations('paintings', 'artist_id', req.params.id, function(paintings) {
            var data = {
                artist: artist[0],
                paintings: paintings
            };
            res.render('artist', data);
        });
    });
});

///ARTISTS // CREATE
app.post('/artists', function(req, res) {
    db.create('artists', req.body, function(artist) {
        res.redirect('/artists');
    });
});

//ARTISTS // EDIT
app.get('/artists/edit/:id', function(req, res) {
    db.find('artists', req.params.id, function(artist) {
        res.render('artistEdit', artist[0]);
    });
});

//ARTISTS // UPDATE
app.put('/artists/:id', function(req, res) {
    db.update('artists', req.body, req.params.id, function(artist) {
        res.redirect('/artists/' + req.params.id);
    });
});

//ARTISTS // DELETE
app.delete('/artists/:id', function(req, res) {
    db.delete('artists', req.params.id, function(artist) {
        res.redirect('/artists');
    });
});

// PAINTINGS // INDEX 
// could extend with an inner join to include the painters name, new db function?
app.get('/paintings', function(req, res) {
    var keys = "paintings.id, paintings.img_url, paintings.title, artists.name"
    var table1 = "paintings";
    var table2 = "artists";
    var compareLeft = "paintings.artist_id";
    var compareRight = "artists.id";


    db.lJoin(table1, table2, keys, compareLeft, compareRight, function(paintings){
       var data = {
            paintings: paintings
        };
        res.render('paintingsIndex', data);
    });
    



    // db.all('paintings', function(paintings) {
    //     var data = {
    //         paintings: paintings
    //     };
        
    // });
});

// PAINTINGS // NEW
app.get('/paintings/new', function(req, res) {
    db.all('artists', function(artists) {
    	var data = {
    		artists: artists
    	};

    	res.render('paintingNew', data)
    });
});

// PAINTINGS // SHOW
app.get('/paintings/:id', function(req, res) {
    db.find('paintings', req.params.id, function(painting) {
        db.find('artists', painting[0].artist_id, function(artist) {
            data = {
                painting: painting[0],
                artist: artist[0]
            }
            
            res.render('paintingSingle', data);	
        })
    });
});

// PAINTINGS // CREATE
app.post('/paintings', function(req, res) {
    db.create('paintings', req.body, function(painting) {
        res.redirect('/paintings');
    });
});

// PAINTINGS // EDIT
app.get('/paintings/edit/:id', function(req, res) {
    db.find('paintings', req.params.id, function(painting){
    	db.all('artists', function(artists){
    		var data = {
    			painting: painting[0],
    			artists: artists
    		}

    		res.render('paintingEdit', data);
    	})
    	
    })

});

// PAINTINGS // UPDATE
app.put('/paintings/:id', function(req, res) {
    db.update('paintings', req.body, req.params.id, function(painting) {
        res.redirect('/paintings/' + req.params.id);
    });
});

// PAINTINGS // DELETE
app.delete('/paintings/:id', function(req, res) {
    db.delete('paintings', req.params.id, function(painting) {
        res.redirect('/paintings');
    });
});

app.get('/test/lJoin', function(req, res) {
    var keys = "paintings.id, paintings.img_url, paintings.title, artists.name"
    var table1 = "paintings";
    var table2 = "artists";
    var compareLeft = "paintings.artist_id";
    var compareRight = "artists.id";


    db.lJoin(table1, table2, keys, compareLeft, compareRight, function(data){
        res.send(data);
    });
});