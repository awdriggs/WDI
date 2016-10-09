#Tweed.r

![Tweed.r](http://i.telegraph.co.uk/multimedia/archive/02640/twitter-happy_2640049b.jpg)

Tonight we will be building Tweed.r using Node, Express, HandleBars and flatfile!!

### Learning Objectives

* Create a web server using Node.js and Express
* Save and persist data using flatfile
* Use forms to POST information

# Step 0

- Please copy todays assignment into YOUR folder for today

# Step 1

- You have been provided with all the module dependencies you will need for this assignment. Run `npm install` from your command line while inside of the starter folder.

# Step 2 

- Set up your `server.js` file just like any express app and require all of the modules required for the app (look at package.json). 

# Step 3 

- Create a `main.handlebars` layout file. It should have a form with the action of `/newTweed` and a method of `POST`. One of the inputs of the form should be for the `tweed` and the other input should be for the `author`

# Step 4

- You are going to have 2 routes in your `server.js` file. One will be `app.get('/')` and another will be `app.post('/newTweed')`. Notice that we are using another HTTP verb called `post`.

# Step 5

- Your `app.get('/')` route should get all the contents of `data.json` and render it using the `home.handlebars` view.

- Your `app.post('/newTweed')` route should create a new tweed in data.json using flatfile. After you save your new entry render it using the `oneTweed.handlebars`

# Step 6

- CSS will be provided below. Please make sure you look at all the classes and IDs in the stylesheet so you will be aware of what classes and IDs to give your HTML.

# CSS

```css
body {
	font-family: PT Mono;
	text-align: center;
	background: url(http://subtlepatterns.com/patterns/upfeathers.png);
}

#tweeds-collection-view{
	width: 960px;
	margin: 0 auto;
}

#new-tweed-form {
	width: 500px;
	height: 170px;
	margin: 0 auto;
}

input, button {
	font-family: PT Mono;
	width: 500px;
	height: 40px;
	text-align: center;
	margin: 0 auto;
	border: 1px solid rgba(0,0,0,.1);
	box-sizing: border-box;
	background-color: rgba(255, 239, 213, .5);
}

input:hover, button:hover {
	border: 1px solid cornflowerblue;
}
button {
	cursor: pointer;
}

.tweed {
	width: 500px;
	height: 170px;
	margin: 0 auto;
	border: 4px solid cornflowerblue;
	border-radius: 10px;
	background-color: white;
}

.content {
	font-size: 20px;
}

```
