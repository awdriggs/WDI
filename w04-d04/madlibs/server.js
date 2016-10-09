var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.use(express.static('public'));

app.get('/episode1', function(req, res){
	//set all place holders
	var place1 = req.query.place1;
	var person1 = req.query.person1;
	var place2 = req.query.place2;
	var noun = req.query.noun;
	var person2 = req.query.person2;
	var person3 = req.query.person3;
	var number = req.query.number;
	var person4 = req.query.person4;
	var adjective1 = req.query.adjective1;
	var adjective2 = req.query.adjective2;
	var adjective3 = req.query.adjective3;
	var adjective4 = req.query.adjective4;
	var anEvent = req.query.anEvent;
	var person5 = req.query.person5;
	var proper = req.query.proper;

	var string = "Stranded on the desert planet " + place1 + " after rescuing young " +  person1 + " from the impending invasion of " +  place2 + ", " + noun + " apprentice " + person2 + " and his " + noun + " Master " + person3 + " discover " + number + " year old " + person4 + ", a young slave " + adjective1 +  " strong in the Force. " + person4 + " wins a " +  adjective2 + " " +  anEvent + " and with it his freedom as he leaves his home to be trained as a " + noun + ". The heroes return to " + place2 + " where " + person4 + " and " + person1 + " face massive invasion forces while the two " + noun + "  contend with a " + adjective3 + " foe named " + person5 + ". Only then do they realize the invasion is merely the first step in a " + adjective4 + " scheme by the re-emergent forces of darkness known as the " + proper + ".";
	
	var returnHTML = buildHTML('Episode I', string);

	res.send(returnHTML);
});


app.get('/episode2', function(req, res){
	//set all place holders
	var number = req.query.number;
	var place1 = req.query.place1;
	var verb = req.query.verb;
	var adjective = req.query.adjective;
	var proper1 = req.query.proper1;
	var name1 = req.query.name1;
	var proper2 = req.query.proper2;
	var name2 = req.query.name2;
	var name3 = req.query.name3;
	var adjective2 = req.query.adjective2;
	var name4 = req.query.name4;
	var adjective3 = req.query.adjective3;
	var proper3 = req.query.proper3;

	var string = number + " years after the invasion of " + place1 + ", the galaxy is on the brink of civil " + verb + ". Under the leadership of a " + adjective + " " + proper1 + " named " + name1 + ", thousands of solar systems threaten to break away from the " + proper2 + ". When an assassination attempt is made on Senator " + name2 +", the former Queen of " + place1 + ", twenty-year-old "+ adjective +" apprentice " + name3 + " is assigned to protect " + name2 + ". In the course of his mission, " + name3 + " discovers his love for " + name2 + " as well as his own " + adjective2 + "  side. Soon, " + name3 + ", " + name2 + ", and " + name4 + " are drawn into the heart of the "+ proper3 + " movement and the beginning of the " + adjective3 + " Wars.";
	
	var returnHTML = buildHTML('Episode II', string);

	res.send(returnHTML);
});

app.get('/episode3', function(req, res){
	//set all place holders
	var adjective1 = req.query.adjective1;
	var noun1 = req.query.noun1;
	var adjective2 = req.query.adjective2;
	var proper1 = req.query.proper1;
	var proper2 = req.query.proper2;
	var proper3 = req.query.proper3;
	var proper4 = req.query.proper4;
	var person1 = req.query.person1;
	var person2 = req.query.person2;
	var person3 = req.query.person3;
	var person4 = req.query.person4;
	var pluralNoun = req.query.pluralNoun;

	var string = "Years after the onset of the Clone Wars, the " + adjective1 + " Jedi Knights lead a massive " + noun1 + " army into a galaxy-wide battle against the " + proper1 + ". When the " + adjective2 + " " + proper2 + " unveil a thousand-year-old plot to rule the galaxy, the " + proper3 + " crumbles and from its ashes rises the evil " + proper4 + ". Jedi hero " + person1 + " is seduced by the dark side of the Force to become the Emperor's new apprentice -- " + person2 + ". The Jedi are decimated, as " + person3 + " and Jedi Master " + person4 + " are forced into hiding. The only hope for the galaxy are " + person1 + "’s own offspring -- the twin children born in secrecy who will grow up to become " + pluralNoun + ".";

	
	var returnHTML = buildHTML('Episode III', string);

	res.send(returnHTML);
});

app.get('/episode4', function(req, res){
	//set all place holders
	var adjective1 = req.query.adjective1;
	var noun1 = req.query.noun1;
	var adjective2 = req.query.adjective2;
	var proper1 = req.query.proper1;
	var proper2 = req.query.proper2;
	var proper3 = req.query.proper3;
	var proper4 = req.query.proper4;
	var person1 = req.query.person1;
	var person2 = req.query.person2;
	var person3 = req.query.person3;
	var person4 = req.query.person4;
	var place1 = req.query.place1;

	var string = "Nineteen years after the formation of the " + proper2 + ", " + person1 + " is thrust into the struggle of the " + proper1 + " Alliance when he meets " + person2 + ", who has lived for years in seclusion on the desert planet of " +  place1 + ". " + person2 + " begins " + person1 + "\'s " + noun1 + " training as "+ person1 + " joins him on a " + adjective1 + " mission to rescue the beautiful " + proper1 + " leader Princess " + person3 + " from the clutches of the evil " + proper2 + ". Although " + person2 + " sacrifices himself in a lightsaber duel with " + person4 + ", his former apprentice, " + person1 + " proves that the Force is with him by destroying the " + proper2 +"\'s " + adjective2 + " Death Star.";
	
	var returnHTML = buildHTML('Episode IV', string);

	res.send(returnHTML);
});

app.get('/episode5', function(req, res){
	//set all place holders
	var proper1 = req.query.proper1;
	var proper2 = req.query.proper2;
	var proper3 = req.query.proper3;
	var place1 = req.query.place1;
	var person1 = req.query.person1;
	var place2 = req.query.place2;
	var person2 = req.query.person2;
	var person3 = req.query.person3;
	var place3 = req.query.place3;
	var adjective1 = req.query.adjective1;
	var adjective2 = req.query.adjective2;
	var person4 = req.query.person4;

	var string = "After the destruction of the " + proper1 + ", " + proper2 + " forces continue to pursue the " + proper3 + ". After the " + proper3 + "\'s defeat on the ice planet " + place1 + ", " + person1 + " journeys to the planet " + place2 +" to train with Jedi Master " + person2 + ", who has lived in hiding since the fall of the Republic. In an attempt to convert " + person1 + " to the dark side, " +person3 + " lures young " + person1 + " into a trap in the Cloud City of " + place3 + ". In the midst of a " + adjective1 + " lightsaber duel with the " + person3 + ", " + person1 + " faces the startling revelation that the " + adjective2 + " " + person3 + " is in fact his father, " + person4 + ".";
	
	var returnHTML = buildHTML('Episode V', string);

	res.send(returnHTML);
});

app.get('/episode6', function(req, res){
	//set all place holders
	var adjective1 = req.query.adjective1; 
	var proper1 = req.query.proper1;
	var verb1 = req.query.verb1;
	var proper2 = req.query.proper2;
	var person1 = req.query.person1;
	var person2 = req.query.person2;
	var adjective2 = req.query.adjective2;
	var person3 = req.query.person3;
	var adjective3 = req.query.adjective3;
	var person4 = req.query.person4;
	var noun1 = req.query.noun1;
	var adjective4 = req.query.adjective4;

	var string = "In the " + adjective1 + " conclusion of the saga, the " + proper1 + " prepares to " + verb1 + " the  " + proper2 + " with a more powerful Death Star while the " + proper2 + " fleet mounts a massive attack on the space station. " + person1 + " confronts his father " + person2 + " in a final " + adjective2 + " duel before the evil " + person3 + ". In the last second, " + person2 + " makes a " + adjective3 + " choice: he destroys " + person3 + " and saves " + person1 + ". The " + proper1 + " is finally defeated, the Sith are destroyed, and " + person4 + " is thus redeemed. At long last, " + adjective4 + " is restored to the galaxy.";
	
	var returnHTML = buildHTML('Episode VI', string);

	res.send(returnHTML);
});

var buildHTML = function(title, string){
	var header = "<html><head><title>"+title+"</title><link rel='stylesheet' type='text/css' href='css/style.css'><link href='http://fonts.googleapis.com/css?family=Cinzel:900,700,400' rel='stylesheet' type='text/css'><link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></head>";

	var body = "<body><div id='wrapper'><a href='index.html'><div id='small-logo'></div></a><h2>"+title+"</h2><div id='outer'><div id='scroll-up'><p>" + string + "</p></div></div></div></body></html>";

	return header+body;

}