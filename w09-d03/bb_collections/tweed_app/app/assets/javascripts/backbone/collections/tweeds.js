App.Collections.Tweeds = Backbone.Collection.extend({
	url: '/tweeds' ,
	model: App.Models.Tweed,
	initialize: function() {
		console.log('new tweeds collection')
	}
})