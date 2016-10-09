var db = require('../db.js');

module.exports.Artist = {

    find: function(id, callback) {

        db.find('artists', id, function(artist) {
            db.findRelations('paintings', 'artist_id', id, function(paintings) {
                var data = {
                    artist: artist[0],
                    paintings: paintings
                };
                //res.render('artist', data);

                callback(data);
            });
        });
    },

    all: function(callback) {
        db.all('artists', function(artists) {

            var data = {
                artists: artists
            }

            callback(data);
        });
    },

    create: function(data, callback) {
        db.create('artists', data, function(artist) {
            callback();
        });
    },

    update: function(formData, id, callback){
      db.update('artists', formData, id, function(artist) {
            callback(artist);            
        });
    },

    delete: function(id, callback){
      db.delete('artists', id, function(artist){
        callback(artist);
      });
    }
    
}