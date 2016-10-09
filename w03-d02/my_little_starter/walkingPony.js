var windowHeight;

$(function() {
  console.log('Loaded, bro');
  walkingPony();
});

var walkingPony = function() {
  var pony = $('#pony');
  var offset = 0;

  //initialize the position to the corner of the window.
  var height = $(window).height()-500;
  var width = $(window).width()-200;
  pony.offset({top: height, left: width}); 
//console.log();

	setInterval(function(){
		offset += 30;
		pony.offset({top: height, left: width -offset})

		if(pony.offset().left < -500){
			offset = 0;
		}
	}, 30);

};

