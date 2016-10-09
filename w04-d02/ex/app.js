//giphy tranlate engine
//fixed the bugs with async

console.log('app.js working');
var key = "api_key=dc6zaTOxFJmzC";
var giphyAPI = "http://api.giphy.com/v1/gifs/"

$(function() {
    $('#controls').on('click', '#submitButton', translate);
});

var translate = function() {
    console.log('translate fired');
    var container = $('#image_area').empty();

    var expression = $("#field")[0].value;

    var split = expression.split(' ');

    //loop through the split array, create divs for each search term.
     for (var i = 0; i < split.length; i++) {
        //debugger;
        build(split[i]);
    }

    var fix = function(t) {
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/translate?s=' + t + '&api_key=dc6zaTOxFJmzC',
            method: 'GET'

        }).done(function(data) {
                render(data, t)
            }

        );
    }

    //loop through split array, now add the photos
    for (var i = 0; i < split.length; i++) {
        //debugger;
        fix(split[i]);
    }
};

//this takes the search term and builds the divs 
var build = function(term){
    var container = $('#image_area');
    var box = $('<div>').attr('id', term);
    box.text(term);
    container.append(box);

}


var render = function(response, term) {

    var box = $('#'+term);
    var img = $('<img>').attr('src', response.data.images.fixed_height.url);
    
    box.append(img);
}