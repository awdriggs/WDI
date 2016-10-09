const flatfile = require('flatfile');

var classmates = [{name: 'Ruby', seat: 'back'}, {name: 'Owens', seat: 'front'}, {name: 'Thom', seat: 'middle'} ]; 

// Load a flatfile database based on file: myfile.json 
flatfile.db('data.json', function(err, data) {
    if (err) throw err;
 
    // Manipulate data like a JS Object 
    //data.ranchie = 'not real';
 	for(var i=0; i<classmates.length; i++){
 		var key = 'classmate'+i;
 		data[key] = classmates[i];
 	}

    // Save to the file. 
    data.save(function(err) {
        if (err) throw err;
    });


});