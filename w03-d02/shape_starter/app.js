$(function() {
	console.log('Loaded, bro');
	var circleContain = $('.circle-container');
	circleContain.click(makeCircles);

	squareContain = $('.square-container');
	squareContain.click(makeSquares);

	thingsContain = $('.things-container');
	thingsContain.click(makeThings);
	//$(window).keypress(update);
});

var makeCircles = function() {
	var circleContain = $('.circle-container');
	
	circleContain.empty();
	var inputs = circleContain.siblings()
	//this is for the number of shapes
	var num = (inputs.eq(0).val());
	
	//this is for the color of shapes
	var color = inputs.eq(1).val();
	
	if(color == ''){
		color = 'firebrick';
	}


	for(var i = 0; i<num; i++){
		var object = $('<div>').attr('class', 'circle').css('background-color', color);
		circleContain.append(object);
	}
	
}

var makeSquares = function() {
	var squareContain = $('.square-container');
	
	squareContain.empty();
	var inputs = squareContain.siblings()
	
	var num = (inputs.eq(0).val());
	var color = inputs.eq(1).val();
	
	if(color == ''){
		color = 'darkslategrey';
	}


	for(var i = 0; i<num; i++){
		var object = $('<div>').attr('class', 'square');
		object.css('background-color', color);
		squareContain.append(object);
	}
	
	
}

var makeThings = function() {
	var thingsContain = $('.things-container');
	thingsContain.empty();
	var inputs = thingsContain.siblings()
	//this is for the number of shapes
	var num = inputs.eq(0).val();
	var color = inputs.eq(1).val();
	
	if(color == '' || color == 'sheen'){
	 	color = 'sheen';
	} else if(color == 'cage'){
		color = 'cage';
	}


	for(var i = 0; i<num; i++){
		var object = $('<div>');
		object.attr('class', 'circle ' + color);
		thingsContain.append(object);
	}
}

// var update = function(event){
// 	//debugger;
// 	if(event.charCode == 13){
// 		console.log("enter pressed");
// 	}
	
// }