// require our model file!!!
var Artist = require('../models/artist.js').Artist;

module.exports.controller = function(app) {
  //Artist - UPDATE
  app.put("/artists/:id", function (req, res) {

   // Call our model here!!!!
   Artist.update(req.params.id, req.body, function (data) {
     res.redirect('/artists/' + req.params.id)
   })
  })
}
