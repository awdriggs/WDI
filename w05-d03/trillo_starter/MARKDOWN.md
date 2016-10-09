#Trillo

![Trillo](http://translation-blog.com/wp-content/uploads/2014/08/Trello_logo.png)

Tonight we will be building Trillo using Node, Express, HandleBars and flatfile!!

### Learning Objectives

* Create a web server using Node.js and Express
* Save and persist data using flatfile
* Use forms to GET,POST,PUT, and DELETE information

# Step 0

- Please copy todays assignment into YOUR folder for today

# Step 1

- You have been provided with all the module dependencies you will need for this assignment. Run `npm install` from your command line while inside of the starter folder.

# Step 2 

- Your `server.js` file is set up already so all you have to do is create your routes.

- You should create 4 routes. The routes are ...

- `app.get('/')` Should get all of our databases data and render it using our `home` view

- `app.post('/newCard')` Should create a new 'card' object in our database. Our card object needs 2 keys, a key of `task` which we get from our form, and it should also have a key of `done` which should be set to `false` by default. We create the `done` key ourselves. After we save our new card object we want to redirect to the `'/'` route. We can redirect using `res.redirect()`

- `app.put('/:cardIndex')` Should grab the card object from our database using `:cardIndex` and set that card's `done` key to be `true`. After saving we want to redirect to the `'/'` route

- `app.delete('/:cardIndex')` Should grab the card object from our database using `:cardIndex` and remove that object from our database. (google how to remove something from an array). After you remove it from the array in our database and save it, redirect it back to the `'/'` route

# Step 3 

- We want to populate our `home.handlebars` with all our suite tasks

- I provided you guys with some starter code in `home.handlebars`. You will notice that there are 2 DIVs. One of for the cards that havent been completed, and the other is for cards that have been completed.

- Inside each DIV you will also notice that there are `<ul>`. The unordered lists will contain all of the tasks. Each task will be inside of an `<li>`

- You are gonna wanna loop through all your objects and check if the key `done` is set to true or false. If its `false` it should be in the todo column, if its `true` then it should be in the done column

- Each `<li>` is gonna have a form inside of it with a button. If the card is in the todo-column you want that form to hit a `put` route. If its in the done-column you want that form to hit a `delete` route

- Your card should look something like this

- ```html
		<li class="card">
			<p>TASK OF CARD</p>
			<form action="HIT A CORRECT ROUTE" method="POST">
				<input that overrides our post method>
				<button id="card-button">Complete</button>
			</form>
		</li>
	```