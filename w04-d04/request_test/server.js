//express
var express = require('express');
var app = express();

//morgan for console
logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));
var request = require('request');
var object = {};
var r = request.get('http://www.omdbapi.com/?t=speed&y=&plot=short&r=json', function(error, response, body) {
        //the request return is a massive string, parse for JSON
        object = JSON.parse(body);
        console.log('body: ' + body);
        // title = object['Title'];
        // actors = object['Actors'];
        // year = object['Year'];
        // imdbRating = object['imdbRating'];


    });

 r.on('finish', function(){
        	console.log("!!!!");
        });

 r.end('this is the end\n');

