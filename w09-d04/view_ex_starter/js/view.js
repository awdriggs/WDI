App.Views.TestView = Backbone.View.extend({
	el: "#view-here",
	tagName: 'li',
	className: 'poop',
	initialize: function() {
		console.log("test view created")
		this.template = Handlebars.compile($('#test-template').html()); //straight js way of grabbing a template
		this.listenTo(this.model, 'change', this.render)
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	events: {
		'click p' : 'clicked'
	},
	clicked: function(){
		console.log("i've been clicked")
	}
})

App.Views.PoopView = Backbone.View.extend({
	el: "#poop",
	tagName: 'li',
	className: 'super',
	initialize: function() {
		console.log("poop view created")
		this.template = Handlebars.compile($('#poop-template').html());
		this.listenTo(this.model, 'change', this.render)
	},
	render: function() {
		var self = this;
		self.$el.html(this.template(this.model.toJSON()));
	},
	events: {
		'click li' : 'clicked'
	},
	clicked: function(){
		console.log('you clicked me')
	}
})