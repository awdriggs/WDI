$(function() {
	var offset = $("#canvas").offset()
    $("#canvas").mousemove(function(event) {
    	     
        var x = event.pageX - offset.left
        var y = (event.pageY - offset.top)/360 * 100;
        console.log("x:"+x+" y:"+y)
        $(this).css('background-color', ' hsl('+ x +',100%, '+y+'%)') 
        
    });

    $("#canvas").click(function() {
    	color = $('#canvas').css('background-color')
    	console.log(color)
    	$("#swatch").css('background-color', color)
    })
});
