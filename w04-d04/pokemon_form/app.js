var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));

app.get('/return', function(req, res) {
    res.send(req.query);
});