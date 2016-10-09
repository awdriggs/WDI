// EX 1
// var button = document.querySelector('button');
// var input = document.querySelector('input')
// button.addEventListener('click', function(){
// 	if(input.value == 'cat'){
// 		alert('meow');
// 	}
// })

// EX 2
// add the result of three inputs
on
var button = document.querySelector('button');
var input = document.getElementsByTagName('input')

var add = function(){
	console.log(parseInt(input[0].value) 
				+ parseInt(input[1].value) 
				+ parseInt(input[2].value));
}

button.addEventListener('click', add);

