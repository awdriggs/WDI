input = process.argv[2];

var sandwiches = {
	'blt' : ['Bacon', 'Lettuce', 'Tomato'],
	'cold cut combo' : [ 'ham', 'salami', 'bologna'],
	'spicy italian' : ['pepperoni', 'salami']
}

console.log(sandwiches[input]);