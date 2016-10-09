App.Views.MovieView = Backbone.View.extend({
	initialize: function(){
		console.log('item view created')
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
		this.$el.addClass('movie-item')
		//debugger;
	}
	//,
	// complete: function(){
	// 	this.model.toggle()
	// },
	// delete: function(){

	// 	this.model.destroy()
		
	// },
	// events: {
	// 	'click .checkbox' : 'complete',
	// 	'click .delete' : 'delete'
	// }
})
