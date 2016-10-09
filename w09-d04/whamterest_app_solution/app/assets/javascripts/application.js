// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .

$(function() {
	$('#new-post').on('click', createPost); // click event to create a new post
	$('#posts-container').on('click', '.delete', deletePost); // click event to delete a post
	App.posts = new App.Collections.Posts(); // creating new collection for posts
	renderAllPosts(); // calls the renderAllPosts functions
});

var App = {
	Models: {}, 
	Collections: {}
};

function renderAllPosts() {
	$('#posts-container').empty(); // clears the div
	App.posts.fetch({success: function() { // gets all the posts from database and populates our collection
		App.posts.each(renderPost); // iterates over each post and renders each post
	}});
};

function renderPost(postModel) {
	var postsContainer = $('#posts-container'); // get the container
	var title = postModel.get("title"); // get the title that the user typed in
	var author = postModel.get("author"); // get the author that the user typed in
	var image = postModel.get("image"); // get the image that the user typed in
	var content = postModel.get("content"); // get the content that the user typed in
	var category = postModel.get("category"); // get the category that the user typed in
	var iD = postModel.get('id'); // get the id from the model

	var newPost = $("<div>").addClass('post').attr('id', iD); // THIS JUST CREATES DOM ELEMENTS
	var postTitle = $("<p>").text(title).addClass('title');
	var postContent = $('<p>').text(content).addClass('content');
	var postAuthor = $("<p>").text(author).addClass('author');
	var postImage = $("<img>").addClass('image').attr('src', image)
	var deletePost = $("<p>").text('DELETE POST').addClass('delete').attr('data-id', iD)

	newPost.append(postTitle).append(postImage).append(postContent).append(postAuthor).append(deletePost).prependTo(postsContainer); // suite appends
};

createPost = function () { // function to create a post
	var data = { // storing everything from the post into a data object
		title: $("[name='title']").val(),
		author: $("[name='author']").val(),
		image: $("[name='image_url']").val(),
		content: $("[name='content']").val(),
		category: $("[name='category']").val()
	};

	var newPost = App.posts.create(data); // creating a new post with the data object from above
	renderPost(newPost); // rendering the post we just created
	$('input').val(''); // empty out the form
};

deletePost = function () { // function to delete a post
	var modelId = $(this).attr('data-id'); // get the id from the DOM
	var model = App.posts.get(modelId); // get the model from the collection using the id
	model.destroy(); // destroy the model
	$(this).closest('.post').remove(); // remove the post from the page
	renderAllPosts(); // calls renderAllPosts which does a fetch and renders everything
};