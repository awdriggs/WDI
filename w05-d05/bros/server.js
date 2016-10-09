var pg = require('pg');

var client = new pg.Client({
    username: '',
    password: '',
    database: 'bros',
    host: 'localhost',
    port: 5432
});

client.connect();

if (process.argv[2] == 'get'){
    client.query('SELECT * FROM bros_and_broettes', function(err, result){
        console.log(result.rows);

        client.end();
    });
}

//node script.js insert wills
if ((process.argv[2] == 'insertName') && (process.argv[3] !== undefined)){
    
    //var thisFuckingSucks = "INSERT INTO bros_and_broettes (name) VALUES ('" +  process.argv[3] + "')"

    client.query("INSERT INTO bros_and_broettes (name) VALUES ($1)", [process.argv[3]], function(err, result){
        console.log(result.rows);

        client.end();
    });
}



//node script.js insert wills
if ((process.argv[2] == 'insertNameAndDoYouLift') && (process.argv[3] !== undefined) && (process.argv[4] !== undefined)){

    client.query("INSERT INTO bros_and_broettes (name, do_you_lift) VALUES ($1, $2)", [process.argv[3], process.argv[4]], function(err, result){
        console.log(result.rows);

        client.end();
    });
}


//node script.js update 'winnie saurus rex' 15
//"UPDATE bros_and_broettes (name) SET ($1) WHERE ID = $2", [process.argv[3], process.argv[4]]

if((process.argv[2] == 'update') && (process.argv[3] !== undefined) && (process.argv[4] !== undefined)){

	client.query("UPDATE bros_and_broettes (name) SET ($1) WHERE ID = $2", [process.argv[3], process.argv[4]], function(err, result){
		console.log(result.rows);

		client.end();
	});
}
