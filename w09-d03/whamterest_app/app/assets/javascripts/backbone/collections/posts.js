App.Collections.Posts = Backbone.Collection.extend({
	url: '/posts',
	model: App.Models.Post,
	initialize: function() {
		console.log("New notes collection created");
	}
});