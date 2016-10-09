# Lab

# Madlibs

#### Objectives
	* Practice setting up express applications
* Practice creating forms
* Practice submitting forms
* Practice getting queries from the request object
* Practice making express serve static files

#### Instructions
* Create an index.html with 4 links that send you to another html file
* Each link should be a seperate html file with its own form
* Each form should represent a different madlib story (create your own)
* Each form should hit a specific route
* Each form should have inputs to fill in words for each story
* Upon submitting the form you should take the words in the inputs
	and fill in the empty blanks in your story

# Enrichment - Request library

* Command line app that takes a movie title as an argument
* Use process.argv to get the argument that was passed in
	+var argument = process.argv;
		+argv is an array of the argument, 0 is node, 1 is the file path, 2 is the argument
		ex, node index.js poop
		argument[2] is poop

* Use the request node package module to hit an end point of the omdb API with the movie argument 
	+npm request package, see documentation
	+request is basically ajax for backend
	npm install --s request
	then require request in server.js
	* Should return the name of the movie, the actors, year it was released and its imdbRating. They should be console.logged on seperate lines.
* Now use an HTML form and express to send the movie title and receive the actors and year it was made.
