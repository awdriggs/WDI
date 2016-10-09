var db = require('../db.js');

module.exports.Artist = {

  delete : function(id, callback){
    db.delete('artists', req.params.id, function (data) {
      callback( data );
    });
  },

  getWithPaintings : function( id, callback){
    db.find('artists', id, function (artistData) {
      db.findRelations('paintings', 'artist_id', id, function (paintingsData) {
        var artistObj = {
          artist: artistData[0],
          paintings: paintingsData
        };

        callback( artistObj );
      });
    });
  }
}
