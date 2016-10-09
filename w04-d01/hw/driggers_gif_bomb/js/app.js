var key = "api_key=dc6zaTOxFJmzC";
var giphyAPI = "http://api.giphy.com/v1/gifs/"

$(function() {
    $('#search-box').on('click', '#search', search);
    $('#search-box').on('keypress', function(event) {
        if (event.keyCode === 13) {
            search();
        }
    });
    $('#search-box').on('click', '#random', randomGifSearch);
    $('#search-box').on('click', '#kittens', kittenBomb);
    $('#search-box').on('click', '#puppies', puppyBomb);
    $('#gif-container').on('click', 'button', toggleUrl);
});

var errorMessage = function(error) {
    console.log('There was a problem:', error.statusText);
};

var toggleUrl = function() {
    var button = $(this);
    var url = button.attr('data-value');
    button.siblings('img').attr('src', url);
};

var randomGifSearch = function() {
    //This functions should hit the appropriate giphy endpoint to return one random gif
    //after ajax has finished it should call the renderRandom function
    $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
    	method: 'GET'
    })
   	.done(renderRandom);
};

var kittenBomb = function() {
    //This function should hit the appropriate giphy endpoint to return limit of 10 kitten gifs
    //after ajax has finished it should call the render function
      $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=kittens&api_key=dc6zaTOxFJmzC&limit=10',
    	method: 'GET'
    })
   	.done(render);
};


var puppyBomb = function() {
    //This function should hit the appropriate giphy endpoint to return a limit of 10 puppy gifs
    //after ajax has finished it should call the render function
      $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=puppies&api_key=dc6zaTOxFJmzC&limit=10',
    	method: 'GET'
    })
   	.done(render);
};


var search = function(event) {
    //This function should hit the appropriate giphy endpoint to return gifs based off the user input
    //after ajax has finished it should call the render function and should clear the input value
    var searchTerm = $('input')[0].value;
    $('input')[0].value = '';
    var encodedSearch = encodeURI(searchTerm);

     $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=' + encodedSearch + '&api_key=dc6zaTOxFJmzC&limit=10',
    	method: 'GET'
    })
   	.done(render);

};

var render = function(response) {
    $('#gif-container').empty()
    var results = response.data; //set this equal to data of response

    var renderedResults = results.forEach(function(gif) {
    	
        //Create a new div with a class of 'gif'
        var gifDiv = $('<div>').addClass('gif');
        //create an img tag with the src set to fixed_width_still url
        var img = $('<img>').attr('src', gif.images.fixed_width_still.url);
        
        //create a start button with a class of 'start' with a data-value of fixed_width url 
        var start = $('<button>').addClass('start').attr('data-value', gif.images.fixed_width.url).text("start");
        
        //create a stop button with a class of 'stop' with a data-value of fixed_width_still url
        var stop = $('<button>').addClass('stop').attr('data-value', gif.images.fixed_width_still.url).text("stop");
        
        //append the img start button and stop button to the new div you created
        gifDiv.append(img, start, stop);
        
        //append the new div to the gif container
        $('#gif-container').append(gifDiv);
    });
};


var renderRandom = function(gif) {
    $('#gif-container').empty();
    //Create a new div with a class of 'gif'
    var gifDiv = $("<div>").addClass('gif');

    //create an img tag with the src set to fixed_width__small_still_url
    var img = $("<img>").attr('src', gif.data.fixed_width_small_still_url); //get the url

    //create a start button with a class of 'start' with a data-value of image_url
    var start = $("<button>").addClass('start').attr('data-value', gif.data.image_url).text("start");
    //create a stop button with a class of 'stop' with a data-value of fixed_width_small_still_url
    var stop = $("<button>").addClass('stop').attr('data-value', gif.data.fixed_width_small_still_url).text("stop");

    //append the img start button and stop button to the new div you created
    gifDiv.append(img, start, stop);

    //append the new div to the gif container
    $('#gif-container').append(gifDiv);
};