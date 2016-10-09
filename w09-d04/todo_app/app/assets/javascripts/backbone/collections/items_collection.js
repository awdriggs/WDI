App.Collections.Items = Backbone.Collection.extend({
	url: '/items',
	initialize: function() {
		console.log('new item collection made');
	},
	model: App.Models.Item
})
