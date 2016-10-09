  var letters = ['a', 'b', 'c', 'd']

  for(var i = 0; i<letters.length; i++){
  	console.log(letter[i]);
  }

  for(var i = 0; i<letters.length; i++){
  	for(var j=0; j<letters[i].length; j++){
  		console.log(letter[i][j]);
  	}
  }

  var reverse = function(string){
  	return string.split("").reverse().join("");
  }

  