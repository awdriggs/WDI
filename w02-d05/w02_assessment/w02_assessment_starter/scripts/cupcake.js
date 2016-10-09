// Using a Constructor Function, create a Cupcake Constructor.

// Question 5 / 6 - Write your Cupcake Constructor Function here.  


var Cupcake = function(cakeFlavor, frostingFlavor){
	this.cake = cakeFlavor;
	this.frosting = frostingFlavor;
	this.sprinkles = false;
}

Cupcake.prototype.getCake = function() {
	return this.cake;
};

Cupcake.prototype.getFrosting = function() {
	return this.frosting;
};

Cupcake.prototype.hasSprinkles = function() {
	return this.sprinkles;
};

Cupcake.prototype.addSprinkles = function() {
	this.sprinkles = true;
	return sprinkles;
};

Cupcake.prototype.reFrost = function(newFrosting) {
	this.frosting = newFrosting;
	return frosting;
};









