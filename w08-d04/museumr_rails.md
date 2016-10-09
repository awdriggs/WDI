# MUSEUMR RAILS

##### For homework we will be porting our lovely museumr app into Rails! This current version of museumr will have a new model `museum` and will have a many to many relationship

## Step 0 - SETUP

* Please copy over museumr_app_starter into your folder
* Go into the folder
* `bundle install` to install all the gems (pry-rails)
* `rake db:create` to create the server
* The only thing you guys have in your starter code is the `CSS`, the `SEED` file, empty `MODELS` and empty `CONTROLLERS`

## Step 1 - MODELS

#### MUSEUM
* A museum has a many to many relationship with artists
* should have a method called add_artist which accepts an argument which is an artist. The method adds the artist to the list of artists the museum contains.
* should have a method called remove_artist which accepts an argument which is an artist. The method removes the artist from the list of artists the museum contains

#### ARTIST
* An artist has a many to many relationship with museums
* An artist has many paintings

#### PAINTING
* A painting belongs to an artist

<br>

* `BONUS?` Please add atleast 2 validations for each model

## STEP 2 - MIGRATIONS

#### PAINTINGS TABLE

* string - `title`
* text - `img_url`
* string - `year_made`
* integer - `artist_id`

#### ARTISTS TABLE

* string - `name`
* text - `img_url`
* text - `description`
* string - `birth_year`
* string - `nationality`

#### MUSEUMS TABLE

* string - `name`
* text - `description`
* string - `address`
* string - `img_url`

#### ARTISTS_MUSEUMS TABLE

* create a suite JoinTable migration with rails

## STEP 3 - DATABASE STUFF THINGS

#### MIGRATE

* `rake db:migrate` to load our tables into the database

#### SEED

* `rake db:seed` to populate our tables. I provided you with a seed file, look at it

#### CHECK TO SEE IF ITS ALL GOOD

* `rails dbconsole` go into your database console and make sure everything looks good!

## STEP 4 - ROUTES

#### PAINTINGS

* paintings should have all the RESTful routes

#### ARTISTS 

* artists should have all the RESTful routes

#### MUSEUMS

* museums should have all the RESTful routes
* in addition to the RESTful routes museums should also have a `add_artist` and a `remove_artist` route. We did this in class today with will (member do stuff)

#### CHECK TO SEE IF ITS ALL GOOD

* `rake routes` <3 rails

## STEP 5 - CONTROLLERS

#### ARTISTS_CONTROLLER

* should have all the RESTful actions

#### PAINTINGS_CONTROLLER 

* should have all the RESTful actions

#### MUSEUMS_CONTROLLER

* should have all the RESTful actions AND the 2 extra routes/actions we made. `add_artist` and `remove_artist`

## STEP 6 - VIEWS

##### Our views will be super similiar to our previous museumr app. Biggest difference is museums and adding thing to museums with dropdowns and stuff. Feel free to refer back to the previous app to look at how our html is set up.

#### PAINTINGS

* `index.html.erb` - should display every painting in a seperate div, and the div should contain the `title`, `image`, `artist name` and the `year it was made`. You should also have a link to the single painting for each one. The text displaying the artist name should link to the artist show page. Should also provide a link to create a new painting
* `show.html.erb` - Should display the single painting with all its info, including the artists name. Should also provide a link to edit the painting
* `new.html.erb` - Should display a form to create a new painting. The form should have a drop down of existing artists to select who the painting will belong to
* `edit.html.erb` - Edit form should be identical to the new form but it should also have a delete button to destroy the painting
* `_form.html.erb` - This will be your form partial. You will use this partial to render your form in your new and edit page

#### ARTISTS

* `index.html.erb` - should display every artist in a serperate div, the div should contain all of the artists information and his image. You should have a link that sends you directly to the artist show page. Should also provide a link to create a new artist.
* `show.html.erb` - Should display the artist in a div, the div should contain all the artists information including which museums he belongs to, also provide a link to the museums. Should also provide a link to edit the artist. You should also display all the artist's paintings in seperate divs, these divs should contain all the information for each painting and link to the specific painting
* `new.html.erb` - Should display a form to create a new artist.
* `edit.html.erb` - Should display a form to edit an artist, the edit form should provide a button to delete teh artist
* `_form.html.erb` -  This will be your form partial. You will use this partial to render your form in your new and edit page

#### MUSEUMS

* `index.html.erb` - Should display every museum in a seperate div, the div should contain all of the museums information and provide a link to display the show page for each museum. Should also provide a link to create a new museum
* `show.html.erb` - Should display the museum in a div, the div should contain all the museums information and also provide a edit link to edit the museum. You should also display all the artists that this museum contains in seperate divs with all of the artists information including a link to that specific artists page.
* `new.html.erb` - Should display a form to create a new museum. A new form should contain a drop down menu (select_collection) to select an existing artist to add to the museum.
* `edit.html.erb` - Should display a form to edit the museum. The form should also contain 2 different drop down menus. One dropdown should be to add an artist and the drop down should only contain existing artists that the museum currently doesnt contain. The other dropdown should be to remove an artist from the museum and it should only contain artists that the museum currently contains. These forms will utilize the 2 extra routes we added to the museum routes, and also utilize the 2 methods we wrote on the museum class
* `_form.html.erb` - This will be your form partial. You will use this partial to render your form in your new and edit page.








### If you reach this far it's probably like midnight and you should probably get some sleep











