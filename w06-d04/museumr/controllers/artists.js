//var db = require('../db.js'); //remove this eventually
var Artist = require('../models/artist.js').Artist;

module.exports.controller = function(app) {

    // ARTISTS // INDEX 
    app.get('/artists', function(req, res) {
        Artist.all(function(data) {
            res.render('artistsIndex', data);
        })
    });

    // ARTISTS // NEW
    app.get('/artists/new', function(req, res) {
        res.render('artistNew');
    });

    // ARTISTS // SHOW
    app.get('/artists/:id', function(req, res) {
        Artist.find(req.params.id, function(artistObj) {
            res.render('artist', artistObj)
        });

    });

    ///ARTISTS // CREATE
    app.post('/artists', function(req, res) {
        Artist.create(req.body, function(){
        	res.redirect('/artists');
        });
    });

    //ARTISTS // EDIT
    app.get('/artists/edit/:id', function(req, res) {
        Artist.find(req.params.id, function(artistObj){
        	res.render('artistEdit', artistObj);
        });
    });

    //ARTISTS // UPDATE
    app.put('/artists/:id', function(req, res) {
        Artist.update(req.body, req.params.id, function(artist){
        	res.redirect('/artists/'+req.params.id);
        });
    });

    //ARTISTS // DELETE
    app.delete('/artists/:id', function(req, res) {
        Artist.delete(req.params.id, function(artist){
        	res.redirect('/artists');
        })
    });
}