window.onload = function() {
  // Attach chapter event listeners here!
  $('#1').click(makeMiddleEarth);
  $('#2').click(makeHobbits);
  $('#3').click(keepItSecretKeepItSafe);
  $('#4').click(makeBaddies);
  $('#5').click(makeBuddies);
  $('#6').click(leaveTheShire);
  $('#7').click(beautifulStranger);
  $('#8').click(forgeTheFellowShip);
  $('#9').click(theBalrog);
  $('#10').click(hornOfGondor);
  $('#11').click(itsDangerousToGoAlone);
  $('#12').click(weWantsIt);
  $('#13').click(thereAndBackAgain);
  bling();
}



// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc 'Merry' Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman",
"The Uruk-hai",
"Orcs"
];

var lands = [
"Shire",
"Rivendell",
"Mordor"
];

// ==============================
//           Chapters
// ==============================
var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  var MiddleEarth = $('<section>').attr('id', 'middle-earth');
  
  for(var i=0; i<lands.length; i++){
    // var land = $('<h1>').text(lands[i]);
    var land = $('<article>').attr('id', lands[i]);
    land.append($('<h1>').text(lands[i]));
    MiddleEarth.append(land);

  }

  $('body').append(MiddleEarth);
};

var makeHobbits = function() {
 ul = $('<ul>');

  for(var i = 0; i < hobbits.length; i++){
    ul.append($('<li>').attr('class', 'hobbit').text(hobbits[i]));
  }

  $('#Shire').append(ul);

  itWhispers();

};

var keepItSecretKeepItSafe = function() {
  // create an empty div with an id of 'the-ring'
  // add the ring as a child of Frodo
  var frodo = $('li')[0];

  $(frodo).append($('<div>').attr('id', "the-ring"));

};

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  var ul = $('<ul>');
  for(var i = 0; i < baddies.length; i++){
    $(ul).append($('<li>').attr('class', 'baddy').text(baddies[i]));
  }

  $('#Mordor').append(ul);
};

var makeBuddies = function() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  var ul = $('<ul>');
  
  for(var i=0; i<buddies.length; i++) {
    $(ul).append($('<li>').attr('class', 'buddy').text(buddies[i]));
  }
  //var aside = $('<aside>').append(ul);
  $('#Mordor').append($('<aside>').append(ul));

};

var leaveTheShire = function() {
  // grab the hobbits and move them to Rivendell

  var getHobbits = $('.hobbit');
  var ul = $('<ul>');

  ul.append(getHobbits);
  $('#Rivendell').append(ul);

};

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
  $( "li:contains('Strider')" ).text("Aragorn");
};

var forgeTheFellowShip = function() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  //var ul = $( ".hobbit" ).parent();
  var fellowship = $('<div>').attr('id', 'the-fellowship');
  
  fellowship.append($('<h1>').text("The Fellowship"));
  fellowshipUl = $('<ul>');
  fellowship.append(fellowshipUl);

  $('#Rivendell').append(fellowship);

  var fellows = $(".hobbit, .buddy")
  for(var i = 0; i<fellows.length; i++){
    fellowshipUl.append(fellows[i]);
    console.log(fellows.eq(i).text()+" joined the fellowship!");
  }
//remove the old uls?
};



var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = $( "li:contains('Gandalf the Grey')" ).text("Gandalf The White");
  // add a class "the-white" to this element
  gandalf.addClass('the-white');

};

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!

  // put a linethrough on boromir's name
  $( "li:contains('Boromir')" ).wrap("<strike>");
  // Remove the Uruk-Hai from the Baddies on the page
  $( "li:contains('The Uruk-hai')" ).remove();
};

var itsDangerousToGoAlone = function(){

  $('#Mordor').append($( "li:contains('Frodo Baggins')" ));
  $('#Mordor').append($( "li:contains('Samwise')" ));

  mountDoom = $('<div>').attr('id', 'mount-doom');
  mountDoom.append('<h1>').text("Mount Doom");
  $('#Mordor').append(mountDoom);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

var weWantsIt = function() {
  gollum = $('<div>').attr('id', 'gollum').text("Gollum");
  $('#Mordor').append(gollum);
  gollum.append($('#the-ring').remove());
  $('#mount-doom').append(gollum);

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $('#gollum').remove();
  $('.baddy').remove();

  var hobbits = $('.hobbit').remove();
  $('#Shire').append(hobbits);
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // add a class "whispered" to the hobbit that was clicked
  // add a CSS rule in style.css for the class "whispered" to turn the text
  // color to "goldenrod"
  console.log('it whispered');
  
  $('.hobbit').click(function(event){
    var clicked = event.target;
    $(clicked).addClass('whispered');
  });
};

var bling = function(){
  var amazing = $('<button>').text("Lord of The Bling");
  $('body').append(amazing);
  var image = $('<img>');
  $('body').append(image);
  
  amazing.click(function() {
    alert('working');
    image.attr('src', "http://images4.fanpop.com/image/photos/18600000/The-Lord-of-the-Bling-movies-18669429-590-880.jpg")
    
  })
}


