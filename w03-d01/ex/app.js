window.onload = function(){
	console.log('working');

};

//If these DOM elements don't exist yet, just create them!!!!!

// 1
var h3 = document.querySelector('h3');
var h3 = $('h3');

// 2
//var h3 = document.querySelector('h3');
//h3.innerText = "Monkey Cheese";
h3[0].innerText = "Monkey Cheese";

// 3
//var h3 = document.querySelector('h3');
//h3.classList.add('fusia');
h3.attr('class', 'fusia');

// // 4
// var button = document.querySelector('button');
// button.addEventListener('click', function() {
//   console.log('hello!');
// });
var button = $('#button').click(function()
	{
		console.log("clicked pressy");
	});

// // 5
// var li = document.createElement('li');
// var body = document.querySelector('body')
// li.innerText = 'Cheeseburgers';
// li.classList.add('huge');
// body.appendChild(li);

$( "<li>Cheeseburgers</li>" ).appendTo( "body" ).addClass('huge');

//or

var li = $("<li>")
li.text('shakes').addClass('huge');
$('body').append(li);

// // 6
// var button = document.querySelector('button');
// var myFunc = function() {
//   console.log("WEEEE");
//   this.innerText = 'I WAS HOVERED OVER';
// }
// button.addEventListener('mouseover', myFunc);
// // hover over button
// button.removeEventListener('mouseover', myFunc);
button.hover(function()
	{	
		debugger;
		console.log("WEEEEE")
		this.innerText = "I was hovered over"
		button.off('mouseenter mouseleave');
	});

	


