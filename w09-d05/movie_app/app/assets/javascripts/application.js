// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

$(document).ready(function() {
    console.log('onload working');

    //add button listener for the submit
    $('#search_div').on('click', '#submit', search)
    $('#movie-wrapper').on('click', '.movie_title', show_info)
})

var search = function() {
    console.log('search fired')

    //get the search term from the box
    var searchTerm = $(this).siblings('input').val(); //no need to encode uri, handled in rails
    App.search = new App.Collections.Movies
    App.search.searchTerm = searchTerm
    App.search.fetch().done(
        function() {
            App.searchView = new App.Views.Search({
                collection: App.search
            })
        }
    )
}

var show_info = function() {
    console.log('show info fired')
    debugger;

    App.detail = new App.Collections.Details;
    App.detail.movieId = $(this).attr('imdbid');
    App.detail.fetch().done(
        function() {
        	App.modalView = new App.Views.Modal({
        		collection: App.detail
        	})
        }
    )
}