var db = require('../db.js');

module.exports.Painting = {
    allWithArtist: function(table1, table2, keys, compareLeft, compareRight, callback) {
        db.lJoin(table1, table2, keys, compareLeft, compareRight, function(paintings) {
            var data = {
                paintings: paintings
            };

            callback(data);
        });
    },

    create: function(formData, callback) {
        db.create('paintings', formData, function(painting) {
            callback(painting);
        });
    },

    oneWithArtist: function(table1, table2, keys, compareLeft, compareRight, id, callback) {
        db.lJoinSingle(table1, table2, keys, compareLeft, compareRight, id, function(painting) {
            callback(painting);
        });
    },

    delete: function(id, callback){
      db.delete('paintings', id, function(painting){
        callback(painting);
      });
    }
}