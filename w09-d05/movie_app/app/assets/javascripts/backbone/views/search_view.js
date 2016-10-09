App.Views.Search = Backbone.View.extend({
    el: "#movie-wrapper",
    initialize: function() {
        console.log("view collection created")
        this.listenTo(this.collection, 'reset', this.renderAllItems);
        this.listenTo(this.collection, 'add', this.renderAllItems);
        this.renderAllItems();

        // $('#submit').on('click', this.newToDo)

    },
    renderAllItems: function() {
        this.$el.empty()
        this.collection.each(this.renderOneItem, this)
    },
    renderOneItem: function(movie) {
        var movieView = new App.Views.MovieView({
            model: movie
        });
        this.$el.append(movieView.el)
    }
    // ,
    // newToDo: function() {
    //     var data = $("input[name=description]").val()
    //     console.log(data);
    //     //this seems like a really un bb way of doing this...
    //     var m = App.c.add({
    //         description: data
    //     })

    //     m.save();
        
    // }

})