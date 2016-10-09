var express = require('express')

var app = express();

app.listen(3000);

app.get('/', function(request, response){
	response.send("something");
});

app.get('/dadjokes', function(request, response){
	response.send("Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, No, just leave it in the carton!");
});

app.get('/about', function(request, response){
	response.send('This is a joke site');
})

app.get('/bananas', function(request, response){
	response.send('All dem bananas');
});

app.get('/knockKnockJoke', function(request, response){
	response.send('insert knockKnock');
});

var dadJokesArray = [];
var knockKnockArray = var knockString = ['Knock, knock. Who’s there? Canoe.Canoe who?  Canoe help me with my homework?', '   Knock, knock  Who’s there?  Merry.  Merry who?  Merry Christmas!',  'Knock, knock.  Who’s there?  Orange.  Orange who?  Orange you going to let me in?',  'Knock, knock.  Who’s there?  Anee.  Anee,who?  Anee one you like!',  'Knock, knock  Who’s there?    Iva.  Iva who?  I’ve a sore hand from knocking!',   'Knock, knock.  Who’s there?  Dozen.  Dozen who?  Dozen anybody want to let me in?',  'Knock, knock.  Who’s there?  Needle.  Needle who?  Needle little money for the movies.',  'Knock, knock.  Who’s there?  Henrietta.  Henrietta who?  Henrietta worm that was in his apple.',  'Knock, knock.  Who’s there?  Avenue.  Avenue who?  Avenue knocked on this door before?',  'Knock, knock.  Who’s there?  Harry.  Harry who?  Harry up, it’s cold out here!',  'Knock, knock.  Who’s there?  A herd.  A herd who?  A herd you were home, so I came over!',  'Knock, knock.  Who’s there?  Adore.  Adore who?  Adore is between us. Open up!',  'Knock, knock.  Who’s there?  Otto.  Otto who?  Otto know. I’ve got amnesia.',  'Knock, knock.  Who’s there?  King Tut.  King Tut who?  King Tut-key fried chicken!',  'Knock, knock.  Who’s there?  Lettuce.  Lettuce who?  Lettuce in it’s cold out here.',  'Knock, knock.  Who’s there?  Noah.  Noah who?  Noah good place we can get something to eat?',  'Knock, knock.  Who’s there?  Robin.  Robin who? Robin the piggy bank again.', 'Knock, knock. Who’s there? Dwayne. Dwayne who? Dwayne the bathtub, It’s overflowing!'];