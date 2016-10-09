const flatfile = require('flatfile');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');

app.use(logger('dev'));
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.engine('handlebars', exphbs({
	extname: 'handlebars',
	defaultLayout: 'main.handlebars'
}));

app.set('view engine', 'handlebars');

//for view engine
app.set('views', path.join(__dirname, 'views')); //for view engine

app.get('/', function(req, res){
	res.render('home');

})
app.post('/', function(req, res){
	
	//get the data send through the form, store at as var
	var formData = req.body;

	//insert flatfile bs
	flatfile.db('data.json', function(err, data) {
        //if there is no input array, make it!
        if(data['input'] == undefined){
			data['input'] = [];
		}

        //push the formdata to the index array
    	data['input'].push(formData);

    	data.save(function(err) {
            if (err) throw err;
        });
    
    	res.render('home', data);
    });

	
});

//this route will return the object at a specified index
app.get('/db/:index', function(req, res){
	var index = req.params.index;
	flatfile.db('data.json', function(err, data) {
       res.send(data.input[index]); 
    });

});

//this route will hit the entire data.json
app.get('/db', function(req, res){
	flatfile.db('data.json', function(err, data) {
       res.send(data) 
    });
});