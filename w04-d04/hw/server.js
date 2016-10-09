var request = require('request');

//this grabs whatever is written after 'node server.js'
//store in an array
var argument = process.argv;

var searchTerm = encodeURI(argument[2]);

request('http://www.omdbapi.com/?t='+ searchTerm + '&y=&plot=short&r=json', function (error, response, body) {
	
	var object = JSON.parse(body);
	console.log("Title: " + object['Title']);	
	console.log("Actors: " + object['Actors']);
	console.log("Year: " + object['Year']);
	console.log("IMDB Rating: " + object['imdbRating']);
})

//movie, the actors, year it was released and its imdbRating.