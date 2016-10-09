App.Collections.Tweeds = Backbone.Collection.extend({
	url: '/tweeds',
	initialize: function() {
		console.log('new tweeds collection made');
	},
	model: App.Models.Tweed
})
