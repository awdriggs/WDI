## MVC Refactor

#### Make your museumr code DRYer and more flexible

### Exercise: Refactor at least one model and controller for your app.

#### How to make your controllers

 - Run `npm install --save fs`

 - Copy the filesystem-include method into your server.js (the code snippet in in this directory)

 - Create a controllers directory (folder)

 - Separate your routes into controller files:

   - Create your empty module.exports objects and do a require for the db file at the top (an example file is in this directory)

   - Cut and paste the code from server.js into your controller files' module.exports objects

   - Make sure your app runs for each controller file

#### How to make your models

 - Create a models directory (folder)

 - Separate your controller db function calls into your models:

   - Create your empty module.exports objects and do a require for the db file at the top

   - Require your new model file at the top of your controller file

   - Cut and paste the code from your controller file into your empty module.exports objects

   - Make sure your app runs for each model file

#### Bonus: refactor your entire app

#### Bonus #2: Write a set of routes/pages that allows the user to select from a drop-down of years of paintings and see all the paintings done before that year. You should need to write at least one model method for this.
