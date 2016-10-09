App.Views.TweedView = Backbone.View.extend({
	el: '#tweed-collection-view',
	initialize: function(){
		console.log('tweed view created')
		//add handlebars bs
		this.template = HandlebarsTemplates['show'];
		this.listenTo(this.model, 'change', this.render)
		this.render()
	},
	render: function() {
		//render bs
		this.$el.html(this.template(this.model.toJSON()))
	},
	events: {
		'click .delete' : 'clicked',
		'click #upvote' : 'upVote',
		'click #downvote' : 'downVote'
	},
	clicked: function(){
		console.log('delete pressy')
	},
	upVote: function(){
		console.log('upvote pressy')
		this.model.upVotes(1)
	},
	downVote: function(){
		console.log('downvote pressy')
		this.model.upVotes(-1)
	}
})
