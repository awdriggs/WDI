// * Open up the index.html in your browser to see what you have to work with
//   * A div of id 'stopwatch' containing a number
//   * Three buttons with ids 'start', 'stop', and 'reset' (they don't do anything yet)
// * Here are the goals for you to achieve with this assignment
//   * Clicking the start button should start the stopwatch. The number inside should
//     increment by 1 every 1 second (1000 milliseconds)
//   * Clicking the stop button should make the stopwatch stop incrementing, but
//     should preserve the last number inside
//   * Clicking the reset button should reset the stopwatch back to 0
//   * How the reset button behaves if you click it while the stop watch is running
//     is up to you (you can either stop the stopwatch, or reset the value and let
//     it keep running)
// * PRO-TIP: Make sure to set up all of your event listeners INSIDE the `window.onload`
//   function


var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var counter = 0;
var stopwatch = document.getElementById('stopwatch');
var startCount; //variable to handle interval

//function to increment the counter
var inc = function() {
  counter++;
  stopwatch.innerHTML = counter;
};

window.onload = function() {
  console.log("The world, like this file, is your oyster.");
  start.addEventListener("click", function(){
  	startCount = setInterval(inc, 1000);
  });

  stop.addEventListener("click", function() {
  	clearInterval(startCount);
  });

  reset.addEventListener("click", function() {
	  counter = 0;
	  stopwatch.innerHTML = counter;
	});
};



