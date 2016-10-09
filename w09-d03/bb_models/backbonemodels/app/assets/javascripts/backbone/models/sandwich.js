App.Models.CheeseSandwich = Backbone.Model.extend({
  urlRoot: '/cheese_sandwiches',
  cheeseChange : function(sandwich){
    console.log("poop");
    
  },
  initialize: function() {
    console.log("Cheese Sandwich model created.");
  }
});
