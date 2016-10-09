App.Routers.Movie = Backbone.Router.extend({
    routes: {
        "movie/:id": "getPost",
        "movie/search/:term": "movies#search"
        // Backbone will try to match the route above first
    }
});