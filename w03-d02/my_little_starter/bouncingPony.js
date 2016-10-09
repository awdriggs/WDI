var windowHeight;

$(function() {
  console.log('Loaded, bro');
  walkingPony();
});

var walkingPony = function() {
  var pony = $('#pony');
  var offset = 0;
  var direction = -1;

  //initialize the position to the corner of the window.
  var height = $(window).height()-500;
  var width = $(window).width()-200;
  pony.offset({top: height, left: width}); 
//console.log();

	setInterval(function(){
		offset += (30*direction);
		console.log(offset);
		 pony.offset({top: height, left: width+offset});

		 if(pony.offset().left < -200){
		 	direction = 1;
		 	pony.css("transform", "rotateY(180deg)");
		 }

		 if(pony.offset().left > width){
		 	direction = -1;
		 	pony.css("transform", "rotateY(0deg)");

		 }
	}, 30);

};

