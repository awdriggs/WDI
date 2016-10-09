App.Views.Modal = Backbone.View.extend({
	 el: "#movie-wrapper",i
	 initialize: function(){
		console.log('modal view created')
		//add handlebars bs
		this.template = HandlebarsTemplates['movie'];
		// this.listenTo(this.model, 'change', this.render)
		// this.listenTo(this.model, 'destroy', this.remove)
		this.render()
	},
	render: function() {
		//render bs
		//debugger;
		this.$el.html(this.template(this.model.toJSON()))
		this.$el.addClass('movie-modal show')
		//debugger;
	}