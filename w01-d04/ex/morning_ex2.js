//EXERCISE TIME 10 minutes

//TV Show Object

var tvShow = {
 name: "Twin Peaks",
 director: "David Lynch",
 genre: ["Drama", "Mystery", "Thriller"],
 actors: ["Kyle MacLachlan", "Lara Flynn Boyle", "Dana Ashbrook", "Sherilyn Fenn"]
}

//Fill in the variable using object calls and console.log them out after


var tvShowName = tvShow.name;
console.log(tvShowName);
var tvShowDirector = tvShow.director;
console.log(tvShowDirector);
var tvShowGenre1 = tvShow.genre[0];
console.log(tvShowGenre1);
var tvShowActor4 = tvShow.actors[3]
console.log(tvShowActor4);
//Bonus:

//Access all of the actors, loop through them and print a string to the 
//console with the actor's name concatonated with the word "rules!"
//e.g "Kyle MacLachlan rules!

var actors = tvShow.actors;

for(var i = 0; i < actors.length; i++){
  console.log(actors[i] + " rules");
}