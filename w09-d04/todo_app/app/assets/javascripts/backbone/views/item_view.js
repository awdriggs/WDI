App.Views.ItemView = Backbone.View.extend({
	//el: '#items-collection-view',
	className: 'todo-item', //this isn't working, did it manually below
	tagName: 'div',
	initialize: function(){
		console.log('item view created')
		//add handlebars bs
		this.template = HandlebarsTemplates['item'];
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'destroy', this.remove)
		this.render()
	},
	render: function() {
		//render bs
		//debugger;
		this.$el.html(this.template(this.model.toJSON()))
		this.$el.addClass('todo-item')
		//debugger;
		if(this.model.attributes.completed){
			this.$el.addClass('done')
		}
	},
	complete: function(){
		this.model.toggle()
	},
	delete: function(){

		this.model.destroy()
		
	},
	events: {
		'click .checkbox' : 'complete',
		'click .delete' : 'delete'
	}
})
