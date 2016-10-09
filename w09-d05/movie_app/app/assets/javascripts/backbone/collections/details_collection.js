App.Collections.Details = Backbone.Collection.extend({
	url: function(){
    return "/movies/" + this.imdb_id;
  },
	initialize: function() {
		console.log('new details collection made');
	},
	model: App.Models.Movie
})
