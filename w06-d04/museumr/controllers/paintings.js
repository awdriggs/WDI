var db = require('../db.js');
var Painting = require('../models/paintings.js').Painting;

module.exports.controller = function(app) {
    // PAINTINGS // INDEX 
    // could extend with an inner join to include the painters name, new db function?
    app.get('/paintings', function(req, res) {
        var keys = "paintings.id, paintings.img_url, paintings.title, paintings.year_made, artists.name, paintings.artist_id"
        var table1 = "paintings";
        var table2 = "artists";
        var compareLeft = "paintings.artist_id";
        var compareRight = "artists.id";

        Painting.allWithArtist(table1, table2, keys, compareLeft, compareRight, function(paintingsWithArtist) {
            res.render('paintingsIndex', paintingsWithArtist);
        })
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

        var id = req.params.id;
        var keys = "paintings.id, paintings.img_url, paintings.title, paintings.year_made, artists.name, paintings.artist_id"
        var table1 = "paintings";
        var table2 = "artists";
        var compareLeft = "paintings.artist_id";
        var compareRight = "artists.id";

        Painting.oneWithArtist(table1, table2, keys, compareLeft, compareRight, id, function(painting) {
            //res.send(painting[0]);
            res.render('paintingSingle', painting[0]);
        })
    });

    // PAINTINGS // CREATE
    app.post('/paintings', function(req, res) {
        Painting.create(req.body, function(painting) {
            res.redirect('/paintings');
        })
    });

    // PAINTINGS // EDIT
    app.get('/paintings/edit/:id', function(req, res) {
        db.find('paintings', req.params.id, function(painting) {
            db.all('artists', function(artists) {
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
        // db.delete('paintings', req.params.id, function(painting) {
        //     res.redirect('/paintings');
        // });
    	Painting.delete(req.params.id, function(painting){
    		res.redirect('/paintings');
    	});
    });
}