console.log('app.js loaded!');

$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=pokemon&jsoncallback=?', function(data) {
    console.log(data)
    array = data.items

    for (var i; i < array.length; i++) {
        var img = $('<img>'); //Equivalent: $(document.createElement('img'))
        img.attr('src', array[i].media);
        img.appendTo($('images_wrapper'));
    }
});

	//change