App.Views.Items = Backbone.View.extend({
    el: "#items-collection-view",
    initialize: function() {
        console.log("view collection created")
        this.listenTo(this.collection, 'reset', this.renderAllItems);
        this.listenTo(this.collection, 'add', this.renderAllItems);
        this.renderAllItems();

        $('#submit').on('click', this.newToDo)

    },
    renderAllItems: function() {
        this.collection.each(this.renderOneItem, this)
    },
    renderOneItem: function(item) {
        var itemView = new App.Views.ItemView({
            model: item
        });
        this.$el.append(itemView.el)
    },
    newToDo: function() {
        var data = $("input[name=description]").val()
        console.log(data);
        //this seems like a really un bb way of doing this...
        var m = App.c.add({
            description: data
        })

        m.save();
        
    }

})