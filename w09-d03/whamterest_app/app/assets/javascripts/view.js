$(function() {
    App.posts = new App.Collections.Posts();
    App.posts.fetch().done(render);

    $('#new-post').on('click', newPost)
    $('#posts-container').on('click', '.remove', removePost)

    //add a listen 2?
})

// var getCollection = function(data)

var render = function(data) {
    
    console.log("yo view working ")


    var posts = $('#posts-container');
    
    posts.empty();

    var postTemplate = HandlebarsTemplates["post"]

    $.each(data, function() {
        posts.append(postTemplate({
            title: this.title,
            id: this.id,
            image: this.image,
            content: this.content,
            author: this.author,
            category: this.category

        }));
    })
}

var newPost = function(data) {
    console.log('yo post button working')

    //grab everything from the form
    var formContents = {
            title: $("[name='title']").val(),
            author: $("[name='author']").val(),
            image: $("[name='image_url']").val(),
            content: $("[name='content']").val(),
            category: $("[name='category']").val()
        }
        //cerate post, no longer needed dummy
        // var newPostModel = new App.Models.Post();
        // newPostModel.set(formContents)

    //pass the contents to the db, no need to do a model
    App.posts.create(formContents, {
    	success : function(data){
    		render([data.attributes]);
    	}
    });   
}

var removePost = function() {
	var id = parseInt($(this).parent().attr('data-id'));
	var thisModel = App.posts.get(id);
	// App.posts.remove(thisModel)
	
	App.posts.remove(id); //not working, remove from the collection but not the db
	
    debugger;

    // thisModel.destroy(); //error, url must be given?

	// var thisPost = App.posts.get(id);
	// App.posts.remove(thisPost); //pulling from collection but not hitting db
	}