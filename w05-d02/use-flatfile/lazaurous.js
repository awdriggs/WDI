const flatfile = require('flatfile');

//node lazaurous.js get numbers
//13

//node lazaurous.js add ____ ____


if (process.argv[2] == 'get') {
    flatfile.db('data.json', function(err, data) {
        console.log(data[process.argv[3]])

    });
}

if (process.argv[2] == 'add') {
    
    flatfile.db('data.json', function(err, data) {
        var key = process.argv[3];
    	data[key] = process.argv[4];

    	data.save(function(err) {
            if (err) throw err;
        });
    });
}

if(process.argv[2] == 'addArray') {
	flatfile.db('data.json', function(err, data){
		
		var key = process.argv[3];

		//if there is no array for that key value, create one!
		if(data[key] == undefined){
			data[key] = [];
		}

		//otherwise, push the list of argument to the array
		//for loop
		for(var i = 4; i<process.argv.length; i++){
			data[key].push(process.argv[i]);
		}

		//save it
		data.save(function(err){
			if (err) throw err;
		})
	});
}

