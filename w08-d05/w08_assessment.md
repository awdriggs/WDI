# Week 8 Assessment

Please work alone. Please record your answers in the space provided.  

`1.` Explain the differences between `Array.each` and `Array.map`.  Use an example.

Both are enumerator function the loop through an array. The difference is what the return value is. array.each returns the original array unchanged, while array.map will return an array altered by whatever action is in the block.

Example

```
friends = %w(Jerry Elaine Kramer George)

x = friends.each do |friend|
  friend += " eats cake"
end

y = friends.map do |friend|
  friend += " eats cake"
end

#doesn't change anything!
puts x

#does change!
puts y

``` 

`2.` What is a Hash in Ruby?  What are some similarities/differences between a Ruby Hash and a Javascript Object?

A hash is an associative array of keys and values. The major difference between a ruby hash and a js object is how to reference the key value pair. You can't use the "." operaterator with hash, you have to use [] instead. Also a hash can have either a string or a symbol as a key.

Example
```
	hashbrown = {potato: 'shredded', "oil" => "peanut"}

	#reference
	hashbrown[:potato]

	# hashbrown.oil will fail
```

`3.` Given the following hash:
```ruby
davids_stuff = {
	hats: [
		'yankees fitted cap',
		'beachhat',
		'sweet visor'
	],
	books: [
		'Chicken Soup for the Dev Soul',
		"O'Reilly Lean Cobol (the one with the boll weevil on the cover)",
		'In Search of Lost Time'
	],
	sunglasses: true,
	snacks: {
		drinks: [
			'coffee',
			'big gulps'
		],
		chips: [
			'funyuns',
			'doritos',
			'cheetos'
		],
		healthy: [
			'gorp',
			'museli',
			'soy chips'
		]
	}
}

```

How would you access 'doritos'?
```
davids_stuff[:snacks][:chips][1]
```

`4.` Write a method called `pied_piper` that takes an array of strings as an argument.  The method should return those strings separated by pipes.  For example:
```ruby
> def pied_piper(['basketball', 'football', 'jai alai'])
"basketball | football | jai alai"
```

```
#this is how you do
def pied_piper(things)
  things.join(" | ")
end

answer = pied_piper(['basketball', 'football', 'jai alai'])
p answer
```

`5.` What is SQL?  What are some benefits to using SQL vs. using an ORM?

SQL is a relational database structure. We have been using postgreSQL. In my mind the ORM is the interface that we use to access the DB. I guess the benefit of using SQL would be to have finer control over the DB.


`6.` Rails is a web framework with an rMVC architecture.  E
Explain what rMVC is/how it works.  

Ruby's flavor of Model View Controller. 

Each model represents a table in the db. Convention is to name the class the singular name of the table, ex: the players table has a model class of Player. 

Each controller has the routing for a model. Convention is to name the class PlayersController. Typically the controller will have the 7 restful routes.

The views is a folder with the following view files, index, show, new, edit. The controller will route to these views if convention is followed.

In short, a request is made to the server. The request hits the controller. The controller looks to the model to grab data, then sends that to the view and back to the client.

`7.`  What are the 7 RESTful Routes?  Explain what controller action occurs along each route.  

index - returns all items in a db, sends Item.all in orm
show - shows a single item, sends Item.find(params[:id]) to orm
new - setup a new item for creation, Item.new to orm
create - creates a new item in the db, Item.create to orm
edit - finds the item to be updated, Item.find(params[:id])
update - updates a given item
destroy - removes a given item from the db

Questions 8 - 11 will be about an app called Fud.Kart, an app that allows users to record their favorite foodcarts around NYC.  

`8.` Given that our database with has a table of food carts and an associated ActiveRecord food carts class, what would be returned by the following code:

```ruby
FoodCart.where({cuisine_type: "Halal"}).order({rating: :desc}).limit(5)
``` 
The top 5 food carts that serve halal food, ranked by their rating. 


`9.` Concerning food carts in our app, what is the name of the food cart:

a) model class
FoodCart

b) model file
food_cart.rb

c) the controller
FoodCartsController

d) the controller file
food_carts_controller.rb

If we were working on the route to see all food carts:

e) What should the route (verb + path) be?
def index
	@food_carts = FoodCarts.all
end

f) Which controller action should be associated to this route?

index

g) What should the name of the view file be?

index.html.erb


Questions 10 and 11 will reference the FoodCart class file below

```ruby
class FoodCart < ActiveRecord::Base
  has_and_belongs_to_many :users

	def out_of_business
		self.update({open: false})
	end

	def upvote
		self.update({rating: self.rating += 1})
	end

	def self.best_carts
		self.order({rating: desc})
	end

	def self.by_cuisine(cuisine_type)
		self.where({cuisine: cuisine_type})
	end

end

```

`10.` What relationship do Food Carts have with Users in this database?

It has a many to many relationship.


`11.` Explain what each Food Cart method does above.  Identify whether each is a Class or Instance method.  

out_of_business
-instance method, take the instance of this class and sets open to false when called

upvote
-instance method, take the instance and update the rating by one.

best_carts
-class method, hits the db and gets all the carts orders by the ratings, high to low

by_cuisine
-class method, hits the db and orders the carts by the type of food they serve up.


## Please email your GIST to DAVID and WILL at ... david.brodsky@ga.co and will.shaw@ga.co