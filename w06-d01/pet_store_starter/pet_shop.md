
#WELCOME TO THE PET SHOP

![Pet Shop](http://www.returnofkings.com/wp-content/uploads/2014/07/catsdogs.jpg)

##Learning Objectives

* Practice setting up a node / express server
* Practice access Postgres via node / express
* Practice writing routes
* Practice setting up handlebar views


Tonight we will be setting up a simple CRUD application using Node / Express and PG.

##STEP 0 

Please copy the starter folder for today into your folder for today. 

#STEP 1

You have been provided all the node modules you will need inside of your `package.json`, you need only run `npm install` to get up and running. 


#STEP 2

You will need to create a new database and write a new SCHEMA for this application. The database should be called `petshop_db`. It should have 2 tables, `cats` and `dogs`. Cats should have an id, name - string, apdopted - boolean, age - integer, adoption_fee - integer. `dogs` should have all the same attributes as `cats`. Create a seed file with six `dogs` and six `cats`

#STEP 3

You will need the following routes.

* get - `'/'` - renders an empty home route.
* get - `'/cats'` - should get all the cats from the db and render the view for all of your cats. 

* get - `'/dogs'` - should get all the dogs from the db and render the view for all of your dogs.

* post - `'/cats'` - should create a new cat in the db and redirect to the cats page.

* post `'/dogs'` - should create a new dog in the db and redirect to the dogs page. 

* get - `'/cats/new'` - should render the form for creating a new cat

* get  - `'/dogs/new'` - should render the form for creating a new dog


* get - `'/cats/edit/:id'` - should render a form filled in with all of the cats information for editing

* get - `'/dogs/edit/:id'` - should render a form filled in with all of the dogs information for editing

* put - `'/cats/:id'` - should update the cats information in the db based off the id and redirect to the cats page. 

* put - `'/dogs/:id'` - should update the dogs information in the db based off the id and redirect to the dogs page.  

* delete - `'/cats/:id' - should delete all of the cats from the db based on the id and redirect to the cats page

* delete - `'/dogs/:id' - should delete all of the dogs from the db based on the id and redirect to the dogs page


#STEP 4

You can choose to create views as you make new routes or make them all when you are finished with your routing. The choice is yours. 

