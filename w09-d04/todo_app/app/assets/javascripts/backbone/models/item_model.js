App.Models.Item = Backbone.Model.extend({
    urlRoot: '/items',
    initialize: function() {
        console.log("new item model created");
        this.set('completed', false)
    },
    toggle: function() {
    	//When this function is executed it should change completed to true if it was false.
    	//And if it was false it should set it to true

        var status = this.get('completed');

        if(status == true){
        	status = false;
        } else if(status == false){
        	status = true;
        }
        this.set('completed', status);
        this.save();
    }
})