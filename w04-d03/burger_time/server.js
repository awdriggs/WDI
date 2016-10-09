var express = require('express');
var app = express();
var logger = require('morgan');


app.listen(3000);

app.use(logger('dev'));


var orders = [];

//burgers route
app.get('/burger/:topping/:kind', function(req, res) {
    var aTopping = req.params.topping;
    var aKind = req.params.kind;
    res.send("You ordered a burger with " + aKind + " " + aTopping);

    
    
    var price = 8;

    if(aTopping == 'cheese'){
    	price = 10;
    } else if(aTopping == 'pickles'){
    	price = 9;
    }
    //save order
    orders.push([aKind, aTopping, price]);
});

//orders route
app.get('/orders', function(req, res) {
    var allOrders = "";
    for (var i = 0; i < orders.length; i++) {
        allOrders += ("Order: " + i + '<br> ' + orders[i][0] + " " + orders[i][1] + " Total: " + orders[i][3] + "<br>");
    }

    res.send(allOrders)
});

//would be awesome to send back JSON instead of a string!

