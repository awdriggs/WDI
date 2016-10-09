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
"The Shire",
"Rivendell",
"Mordor"
];

// ==============================
//           Chapters
// ==============================

var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // assign the name of the land as the id of the corresponding article tag
  // inside each article tag include an h1 with the name of the land
  // append the section to the body
  var section = document.createElement("section");
  section.setAttribute("id", "middle-earth");

  for(var i = 0; i < lands.length; i++){
    var article = document.createElement("article");
    article.setAttribute("id", lands[i]);
    var headline = document.createElement("h1");
    headline.innerHTML = lands[i];
    article.appendChild(headline);
    section.appendChild(article);
  }

  document.body.appendChild(section);
};

var makeHobbits = function() {
  console.log("Tring to make hobbits")
  
  var place = document.getElementById("The Shire")
  var list = document.createElement("ul");
  
  for(var i = 0; i < hobbits.length; i++){
    var item = document.createElement("li");
    item.setAttribute("class", "hobbit");
    item.innerHTML = hobbits[i];
    list.appendChild(item);
  }

  place.appendChild(list);
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
};

var keepItSecretKeepItSafe = function() {
  var ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  var holder = document.getElementsByClassName("hobbit");
  holder[0].appendChild(ring);
  // create an empty div with an id of 'the-ring'
  // add the ring as a child of Frodo
};

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  console.log("Tring to make baddies")
  
  var place = document.getElementById("Mordor")
  var list = document.createElement("ul");
  
  for(var i = 0; i < baddies.length; i++){
    var item = document.createElement("li");
    item.setAttribute("class", "baddy");
    item.innerHTML = baddies[i];
    list.appendChild(item);
  }

  place.appendChild(list);
};

var makeBuddies = function() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  console.log("Making Buddies")
  
  var aside = document.createElement("aside");
  var place = document.getElementById("middle-earth");
  var list = document.createElement("ul");
  
  for(var i = 0; i < buddies.length; i++){
    var item = document.createElement("li");
    item.setAttribute("class", "buddy");
    item.innerHTML = buddies[i];
    list.appendChild(item);
  }
  aside.appendChild(list)

  place.appendChild(aside);
};

var leaveTheShire = function() {
  // grab the hobbits and move them to Rivendell
  console.log("leaving the shire");
  var place = document.getElementById("The Shire");
  var child = place.removeChild("ul");
  place = document.getElementById("Rivendell");

  place.appendChild(child);
};

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
};

var forgeTheFellowShip = function() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
};

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border
};

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

var itsDangerousToGoAlone = function(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // add a class "whispered" to the hobbit that was clicked
  // add a CSS rule in style.css for the class "whispered" to turn the text
  // color to "goldenrod"
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  // Attach chapter event listeners here!
  document.getElementById('1').addEventListener('click', makeMiddleEarth);
  document.getElementById('2').addEventListener('click', makeHobbits);
  document.getElementById('3').addEventListener('click', keepItSecretKeepItSafe);
  document.getElementById('4').addEventListener('click', makeBaddies);
  document.getElementById('5').addEventListener('click', makeBuddies);
  document.getElementById('6').addEventListener('click', leaveTheShire);
};
