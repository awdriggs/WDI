$(function() {
    console.log('$$$ in the bank.');
    var button = $('#set-color');
    var color = "black";

    var changeColor = function() {
        // console.log('button clicked!')
        // console.log(event.target)

        color = $('#color-field')[0].value;
        $('.brush').css('background', color);
    };


    button.on('click', changeColor);

    $('#color-field').keydown(function(e) {
        if (e.keyCode == 13) {
            changeColor();
        }
    });

//build the board
    var wrapper = $('<div>');
    wrapper.attr('id', "wrapper");
    $('body').append(wrapper);

    for (var i = 0; i < 8000; i++) {
        var square = $('<div>');
        square.attr('class', 'square');
        wrapper.append(square);
    }

    wrapper.on('mouseover', function() {
        var target = $(event.target);
        target.css('background', color);
    });

});