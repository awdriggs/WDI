# Assessment

* What is AJAX and how do we use AJAX in our apps?

AJAX means asynchronous javascript and xml. We use it as a way for a javascript app to make a request to a server and collect and process a response. With backbone, ajax is being used 'under to covers' when we are making requests to the server through the models and collections.

* What is an API? Explain how we have used API's in the past week and how we make our own APIs

An API is a way that programmers interacte with a server. In the past we used the giphy API to get data from their server. This week we created rails apps that acted as an api for javascript/backbone. requests were made through rails to the db, rails returned JSON that the js could work with.

* AJAX Requests occur asynchronously. What does that mean generally? How must we consider this fact as we develop applications that use AJAX?

It means that the program to proceed even though the data hasn't been received yet. One way we have to control asynchronicty by using a .done, which doesn't run until ajax has a positive response.

* Write an AJAX POST request to the route '/people'. The person table has the columns `firstName` and `lastName`

```
$.ajax({
	url: "/people"
}).done( function(){
	console.log(data.firstName);
	console.log(data.lastName)
})

<br><br>

* What is CRUD? Please explain in the context of apps that we will make in class

CRUD are the actions that we can make with a database. Create Read Update Destroy. For example the Tweedr app...the crud actions were routes that the rails app could process and then use active record to work on the database.

* What is a framework? why do we use frameworks in development?

A framework is a tool built on top of another language. They are meant to make development easier by providing methods and convention. Backbone is a framework that operates on the DOM.

* Exaplin the relationship between Backbone Models, Collections, and Views

In backbone, a model represents a single row of a database. We can extend the functionability with methods. A collection is a group of models. Whats nice is that we can iterate over a collection because is essentially an array. A view is the backbone way of displaying a model or a collection to the DOM. most of our logic has been in the view.

* Explain how Model and Collection Listeners work in backbone

Model and collection listeners are a lot like click events, but they are triggered on a change to either the model or the collection. We setup what the listener should listen to, and 'verb' it is listening to, i.e. 'destroy', and the action is should take when heard.

* What is the difference between $el and el?
$el is the el wrapped in jquery so that we can do jquerish actions with it. Both represent the element that a view is attached to.


* What is the difference between server side rendering, and client side rendering?

On server side rendering, the server builds the pages using the html templates and then serves them to the browser. This requires a page reload and frequent calls to the server. Client side rendering grabs a boat load of data once a page is loaded, and uses that to effect the DOM and only makes calls to the server when needed. So, no page reloads. Client side rendering is how we can make single page applications.

* I have built a full-stack app using backbone.js (FE) and express.js (with database). I have a database of books, server routes that prodive full CRUD for books, and a Backbone collection of books (representing all books in my DB). When i call .fetch() on that books collection in the front-end, what happens in the backend?

On .fetch(), the client makes a request that hits the index route for an express model. Ther server goes to the DB, collects the data, and wraps it as a JSON object. The server then renders that data as JSON for the front end. The data is used by the front end to insert the data from the db into the dom.

<br><br>

# Email your gist to david.brodsky@ga.co will.shaw@ga.co

