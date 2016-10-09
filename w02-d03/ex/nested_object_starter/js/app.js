//shorten the path to the array of places
var getItems = bars.response.groups[0].items;

var runParse = function() {
	//array for the strings of places
	var parse = []
	
	for(var i = 0; i < getItems.length; i++){
		//assign all the vars for this item.
		var name = getItems[i].venue.name;
		var category = getItems[i].venue.categories[0].name;
		var address = getItems[i].venue.location.address;
		var crossSt = getItems[i].venue.location.crossStreet;
		var city = getItems[i].venue.location.city;
		var state = getItems[i].venue.location.state;
		var zip = getItems[i].venue.location.postalCode;
		var country = getItems[i].venue.location.country;
		var rating = getItems[i].venue.rating;
		var likes = getItems[i].tips[0].likes.count; //error

		//create the string!
		var placeInfo = (name 
			+ " is a " + category 
			+ ", it is located at " + address 
			+ " (" + crossSt + "), "
			+ city + ", " + state + " " + zip + ", " + country 
			+ ". Other users have rated this place a " + rating
			+ ", it has " + likes + " Likes.");

		//testing out the parse!
		console.log(placeInfo);
		parse.push(placeInfo);
	}
	
	//return the array of palces
	return parse;
}

window.onload = function() {
	//run the function on load!
	runParse();
}