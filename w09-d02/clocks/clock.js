console.log('clock working yo')
$(document).ready(function() {
    d = new Date();

    seconds(d.getSeconds());
    minutes(d.getMinutes());
    hours(d.getHours());

})

var seconds = function(current) {
    var inc = current
	
	hitSec(inc);
    
    setInterval(function() {
        inc++;
        hitSec(inc)
    }, 1000);
}

var minutes = function(current) {
    var inc = current
	hitMin(inc);
    
    var myVar = setInterval(function() {
        inc++;
        hitMin(inc);
    }, 60000);

}

var hours = function(current) {
    var inc = current

    hitHour(inc);

    debugger;
    var myVar = setInterval(function() {
        inc++;
        hitHour(inc);
    }, 360000);
}

var hitHour = function(inc) {
    var deg = inc * 30
    $("#hour-hand").css('transform', 'rotate(' + deg + 'deg)')
}

var hitSec = function(inc) {
    var deg = inc * 6;
    $("#second-hand").css('transform', 'rotate(' + deg + 'deg)')
}

var hitMin = function(inc) {
	var deg = inc * 6;
    $("#minute-hand").css('transform', 'rotate(' + deg + 'deg)');
}