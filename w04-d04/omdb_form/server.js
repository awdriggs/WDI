//insert express app stuff
var express = require('express');
var app = express();

//morgan for console
logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

//makes the public folder public
app.use(express.static('public'));

//needed for request function to work
var request = require('request');



//empty vars for return
	var title = "", actors = "", year = "", imdbRating = "";

app.get('/return', function(req, res) {
	//get the query title
	var searchTerm = req.query.title;

	

    //send the request to the 
    request('http://www.omdbapi.com/?t=' + searchTerm + '&y=&plot=short&r=json', function(error, response, body) {
        //the request return is a massive string, parse for JSON
        var object = JSON.parse(body);

        title = object['Title'];
        actors = object['Actors'];
        year = object['Year'];
        imdbRating = object['imdbRating'];
    });

    
    var returnString = '<h2>' + title + '</h2>' + '<br>' +
    					'Actors: ' + actors + '<br>' +
    					'Year: ' + year + '<br>' +
    					'IMDB Rating: ' + imdbRating;

    res.send(returnString);
});

// //get
// console.log("Title: " + object['Title']);
// console.log("Actors: " + object['Actors']);
// console.log("Year: " + object['Year']);
// console.log("IMDB Rating: " + object['imdbRating']);