App.Models.Tweed = Backbone.Model.extend({
    urlRoot: '/tweeds',
    initialize: function() {
        console.log("new model created");
    },
    upVotes: function(voteValue) {
        var upvotes = this.get('upvote');
        this.set('upvote', upvotes + voteValue);
        this.save();
    }
})