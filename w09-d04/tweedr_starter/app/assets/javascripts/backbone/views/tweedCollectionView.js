App.Views.TweedCollectionView = Backbone.View.extend({
	el: "#tweed-collection-view",
	initialize: function(){
		console.log("view collection created")
		this.listenTo(this.collection, 'reset', this.renderAllTweeds);
		this.listenTo(this.collection, 'add', this.renderOneTweed);
		// this.renderAllTweeds();
	},
	renderAllTweeds: function() {
		this.collection.each(this.renderOneTweed, this)
	},
	renderOneTweed: function(tweed) {
		var tweedView = new App.Views.TweedView({model: tweed});
		this.$el.append(tweedView.el)
	}

})

