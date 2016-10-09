# Week 1 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Please copy this directory to your w02d05 directory.  THEN...

The first 4 questions will test you ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The next 3 questions will test your ability to use JavaScript Constructors.  Please work in scripts/cupcake.js

The last 3 questions will test your ability to manipulate the DOM with javascript.  Please work in scripts/park.js

When you are finished please submit a Gist to `will.shaw@ga.co` & `david.brodsky@ga.co` with copys of `cupcake.js`, `park.js` & `and a copy of the questions from `this markdown file`!!

## Concepts

1. What is the DOM?

DOM is the document object model. It is the entire html of a website contianed in an object, making the html assessible through javascript.

2. Explain how an event listener function works in JavaScript.

The event listener function is a callback function where the first parameter is the event to look for, i.e. 'click' and the second parameter is the function to call when the event happens.

3. What is a Constructor Function?  

The consturctor function is a way to define attributes and behaviors for an object. It allows for multiply objects to be created with the same propererties using the 'new' keyword.

## Practice

### Constructors

5. Using a Constructor Function, create a Cupcake Object Constructor. The function takes two parameters, cakeFlavor and frostingFlavor. The Cupcake object has the following attributes:
	*`cake` - set from the parameter cakeFlavor.
	*`frosting` - set from the parameter frostingFlavor.
	*`sprinkles` - should be initially set to false.  

6. Add the following behaviors to the Cupcake Constructor.  
	*`getCake()` - a getter method that returns the cake type of a Cupcake.
	*`getFrosting()` - a getter method that returns the frosting type of a Cupcake.
	*`hasSprinkles()` - method that returns true if a Cupcake has sprinkles and false if it does not.
	*`addSprinkles()` - a method that adds sprinkles to a Cupcake by changing sprinkles to true.  
	*`reFrost(newFrosting)` - a setter method that changes the frosting flavor of a Cupcake.  

### DOM Manipulation

7. Append an `h1` tag to the body of this page.  This `h1` should have the text "$uite Park Time".  

8. Add a click event to the `div` on the page with the id `duck`.  This click event should change the id of this div to `weaselpecker`.  When the click event fires, the duck image  should change to a weaselpecker image.  
