$(document).ready(function() {
    $('#pressy').click(makeCall);
})

var makeCall = function() {

    var div = $('#movie_info');



    var term = encodeURI($('#search').val());

    var plot = $('input:radio:checked').val();

    $.ajax({
        url: "http://www.omdbapi.com/?t=" + term + "&y=&plot=" + plot + "&r=json&tomatoes=true"
    }).done(function(data) {
        if (data.Response == "True") {
            div.empty();
            $('#search').val("")
            div.append("<h2>" + data.Title + "</h2>")
            div.append("<p> Year: " + data.Year + "</p>")
            div.append("<p> Rated: " + data.Rated + "</p>")
            div.append("<p> Synopsis: " + data.Plot + "</p>")
            div.append("<p> Tomatoes: " + data.tomatoRating + "</p>")
        } else {
        	$('#search_box').css('background-color', 'red')

        	setInterval(function () {$('#search_box').css('background-color', 'yellow')}, 1000);
        }

    });


}

console.log("BRO!");