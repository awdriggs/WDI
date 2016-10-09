App.Collections.Movies = Backbone.Collection.extend({
	url: function(){
    return "/movies/search/" + this.searchTerm;
  },
	initialize: function() {
		console.log('new movie collection made');
	},
	model: App.Models.Movie
})
