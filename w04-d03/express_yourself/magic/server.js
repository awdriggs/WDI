var express = require('express');
var app = express();

logger = require('morgan');
app.use(logger('dev'));

app.listen(3000);

app.get('/', function(req, res){
	res.send('Magic 8 ballz!');
})

//magic 8 ballz
app.get('/magic/:q', function(req,res){
	magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

	var randomIndex = Math.floor(Math.random()*magicArray.length);

	res.send(magicArray[randomIndex]);

});