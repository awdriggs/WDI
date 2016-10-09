# Lab


### Learning Objectives

- Practice with DOM manipulation
- Practice with fundamental JS structures



### Step 1

Create a new folder in YOUR folder for today called, `vanilla_dom`
Inside of this folder create two files `index.html` and `app.js`

Copy the following `html` into your new `index.html` file  

```html
<html>
  <head>
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
    <script src="js/app.js"></script>
    <title>Vanilla</title>
  </head>
  <body>
    <section id="header">
      <h1 id="page-title">Vanilla DOM</h1>
      <div id="image-container">
        <img height="100px" src="http://upload.wikimedia.org/wikipedia/commons/c/c0/Vanilla_Ice.jpg" alt="Vanilla Ice" />
      </div>
      <p id="description">
        Vanilla JavaScript can be awesome. Here's why.
      </p>
      <ul id="awesome-list">
        <li class="awesome-list-item">It is built into JavaScript.</li>
        <li class="awesome-list-item">Everybody loves vanilla.</li>
        <li class="awesome-list-item">Everybody loves Vanilla.</li>
      </ul>
    </section>
  </body>
</html>

```

Using Vanilla JS manipulate the above `html` in the following ways:

* Access the page title and store it in a var called `pageTitle`
* Access the list and store it in a var called `pageLink`
* Add a fourth item to the list 
* Move the image to after the list
* Make the page title red (by adding a class to the page title)
* Make the list items blue (add classes to each list item, not to the ul element)
* Make the description green
* Add a red footer paragraph to the page with the id "page-footer"

###BONUS AFTER TO COMPLETE AFTER STEP 3

* Instead of having that starter HTML in the page, write JavaScript to **construct** this page

* ex: document.createElement("document")


###Step 2

# Time Is Of The Essence

### Learning Objectives

* MOAR practice with DOM manipulation
* MOAR practice with DOM events
* Use `setTimeout`, `setInterval`, and `clearInterval`

### Time out

Open up a chrome console.

Copy and paste this code inside.

```js
var hello = function() {
  console.log("Hello!");
};

setTimeout(hello, 2000);
```

What happened? A delayed reaction, perhaps? Yes! `setTimeout` takes two arguments,
a function to execute, and the time (in milliseconds) after which to execute it.

You can even pass in an "anonymous function" straight in, without having to
create a variable to store it in the first place. Try this.

```js
setTimeout(function() {
  console.log("Well, how do you do!");
}, 2000);
```

### Interval Training

Let's perform a subtle variation. Go ahead and refresh your browser page.

Try the following code in your console.

```js
var hello = function() {
  console.log("Hello!");
};

setInterval(hello, 500);
```

What did this do? Oooh, repetition!

Wait. How do we make it stop? Hello? Helloooo? I need to stop this thing? What
is going on? Oh god, refresh the browser! Make it stop, refresh the browser!!

Phew. That was close. Hmmm, so `setInterval` is a little dangerous if we don't
handle it carefully. Thankfully, every time we use `setInterval`, it returns a
number to us that uniquely identifies the particular "process" that we've asked
to be repeated over and over and over and over...

We can catch this number in a variable, and use it to **stop** the repetition
using a sister function, `clearInterval`. Let's take a look!

Refresh your page once more (just to be sure) and run the following code.

```js
var hello = function() {
  console.log("Hello!");
};

var intervalHandle = setInterval(hello, 500);
```

Our crazy console would have now started tirelessly greeting us once more.
Notice this time we saved the return value of `setInterval` in a variable called
`intervalHandle`. If at any point we want to stop the repetition, we merely have
to do the following.

```js
clearInterval(intervalHandle);
```

Go on. Whenever you're ready, try that out. Did your console stop saying hello
to you? Good chap.

### Stopwatch time

Now, to the problem! Use your newfound knowledge of `setInterval` and `clearInterval`
to implement a stopwatch! Copy the `stopwatch_starter` from `ASSIGNMENT` into your folder for today. In the starter code, you will find the usual index.html,
style.css, and app.js.

* Open up the index.html in your browser to see what you have to work with
  * A div of id 'stopwatch' containing a number
  * Three buttons with ids 'start', 'stop', and 'reset' (they don't do anything yet)
* Here are the goals for you to achieve with this assignment
  * Clicking the start button should start the stopwatch. The number inside should
    increment by 1 every 1 second (1000 milliseconds)
  * Clicking the stop button should make the stopwatch stop incrementing, but
    should preserve the last number inside
  * Clicking the reset button should reset the stopwatch back to 0
  * How the reset button behaves if you click it while the stop watch is running
    is up to you (you can either stop the stopwatch, or reset the value and let
    it keep running)
* PRO-TIP: Make sure to set up all of your event listeners INSIDE the `window.onload`
  function


### Step 3

Copy the `nested_object_starter` folder from `ASSIGNMENT` to YOUR folder for today. In the `app.js` write a function that will do the following:

Using the `bars` object please make the following string for all of the entires. 

```
"Momofuku Milk Bar is a Dessert Shop, it is located at 382 Metropolitan Ave (btwn Havemeyer & Marcy), Brooklyn, NY 11211, United States. Other users have rated this place a 9.1, it has 18 Likes."

```