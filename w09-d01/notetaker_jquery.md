# NoteTaker jQuery

![NoteTaker](http://www.pepnet.org/sites/default/files/icon_notetaker_300x290.png)

# Setup a Rails Application

##### Making a new application

* `rails new notetaker_jquery_app --database=postgresql` 
* `rake db:create`

##### Setting up Gems

* Navigate to the `Gemfile`
* add `gem 'pry-rails'`
* add `gem 'handlebars_assets'`
* run `bundle install`

##### Setting up the Handlebars gem

* Navigate to `app/assets/javascripts/application.js`
* Put in these 2 lines into the file. `//= require handlebars` and `//= require_tree ./templates`.Make sure that it is BEFORE the `//= require_tree .`
* It should look like this...
```javascript
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require_tree ./templates
//= require_tree .
```

* Notice that rails requires jQuery for us already :)

##### Setting up the templates directory

* create a new folder called `templates` in your `assets/javascripts` directory
* inside the folder `templates` create 4 handlebar templates called `editnote.hbs` `newnote.hbs` `note.hbs` `preview.hbs`
* your folder structure should look something like this ...
```
assets/
	javascripts/
		templates/
		    editnote.hbs
		    newnote.hbs
		    note.hbs
		    preview.hbs
```

# Setting up the Views!

##### Setting up the `application.html.erb`

* your `application.html.erb` should look like this ...
```html
<!DOCTYPE html>
<html>
	<head>
	  <title>NotetakerJquery</title>
	  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
	  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
	  <%= csrf_meta_tags %>
	</head>
	<body>

		<div id="main-view">
			<h1>Notetaker</h1>
			<section id='preview-list-view'>
			</section>
			<section id='note-view'>
			</section>
		</div>

	</body>
</html>
```

##### Setting up the templates

* `editnote.hbs` should look like ...
```
<h4>Note #<span class="id red">{{id}}</span></h4><br>
<div class="input">
	<input type="text" name="title-update" id="title" value='{{title}}' autocomplete="off">
</div>
<br>
<div class="input">
	<textarea name="content-update" id="content">
		{{content}}
	</textarea>
</div>
<br>
<input type='button' value="Update" class="button update">
```
<br>

* `newnote.hbs` should look like ...
```
<div class="input">
	<input type="text" name="title" id="title" placeholder='Add a title...' autocomplete="off">
</div>
<br>
<div class="input">
	<textarea name="content" id="content" placeholder='Start typing here...'></textarea>
</div>
<br>
<input type='button' value="Create" class="button create">
```
<br>

* `note.hbs` should look like ...
```
<div data-id={{id}}>
	<input type="button", value="New" class="button new">
	<br><br><br>
	<h4>Note #<span class="id red">{{id}}</span></h4><br>
	<div class="input">
		<p class="note-title">{{title}}</p>
	</div>
	<br>
	<div class="input">{{content}}</div>
	<br><br><br>
	<input type="button" value="Edit" class="button edit">
</div>
```
<br>

* `preview.hbs` should look like ...
```
<div class="note" data-id={{id}}>
	<p class="note-title">
		{{title}}
	</p>
	<span class="delete">X</span>
</div>
```
<br>

# Setting up the model

##### `Note` model
* We are gonna need one model which is just `Note`

# Setting up the routes

* in our routes.rb file we want to add `root to: 'application#index'`
* we also want to add resources to notes except for the `new` and `edit` actions

# Setting up the controllers
* In our `application_controller.rb` add the following code ... 
```ruby
  def index
    render layout: 'application', text: ''
  end
```
* We add that line of code because in our routes we have `root to: 'application#index'`
<br>
* Create a new controller for our `notes`
* The notes controller should have the following actions ... `index` `show` `create` `update` `destroy`
* Since we will be making a single page application using AJAX our controllers need to `render json: note`

# Setting up the database

##### Notes table migration
* We want to generate a migration that will create a notes table for us
* The notes table should have the following columns 
* `title` which should be a string
* `content` which should also be a string
<br>
* run `rake db:migrate` and make sure the table loaded in correctly

# NOTE TAKER APPLICATION !!!

##### The application
* We will be creating a single page application to create, read, update, and delete our notes

##### Javascript code
* All of our javascript will go into `app/assets/javascripts/application.js`
* Don't forget that a lot of your code will have to run after the page has loaded

##### User Stories
* I want to be able to see a preview of all my notes rendered with `preview.hbs`
* When I click on a preview note, I want the full note to be displayed with the `note.hbs` template
* When I click on the new button, I want a form to be rendered with the `newnote.hbs` template 
* When I click on the create button, I want a new note created, After the note is created I want it to show up in the preview list, and I also want to see the note I just created rendered with the `note.hbs` template
* When I click on the edit button, I want a form to be rendered with the notes data using `editnote.hbs`
* When I click on the update button, I wanna update the note I am editting. After the note is the preview list should be updated and I wanna see the full note information rendered using the `note.hbs` template

<br>

* This is a single paged appication so we should never leave the page that we are on.
* OUR CLICK EVENTS WILL MOST LIKELY NEED TO BE DELEGATED CLICK EVENTS!

# HANDLEBARS TIPS

##### How the hell do I use handlebars with Rails?

* Load up your app in chrome and open up the developer console
* You will notice that you have a global variable called `HandlebarsTemplates`
* When you type in the variable `HandlebarsTemplates` you will notice that it will give you an object, and that objects keys will be your handlebar template names, for example `editnode` `newnote` `note` `preview`
* So the way you load in your template is by doing this ...  <br>`var previewTemplate = HandlebarsTemplates["preview"]`
* `previewTemplate` is now a variable that is holding out template and waiting for us to pass it information
* We can pass the template information doing this ... <br> `previewTemplate({title: "Note Title"});`
* After we pass information to the template you will notice that it returns a string that resembles HTML. What can we do with this string you ask? We can append it to our page!!!!!!!
* `$('#preview-list-view').append(previewTemplate({title: "Note Title"}))` <br> This will append our template with the data inputted into our #preview-list-view