# Creating DB, Executing Schema file and Importing data in

1. get into postgreSQL console:
```psql ```

2. create the sauce_db database:
```CREATE DATABASE sauce_db;```

3. in psql while connected to the sauce_db database, import the schema.sql file:
```
\i /Users/pavankatepalli/Desktop/git/WDI_skywalker_instructors/w06/labs_homework/tuesday_app/schema.sql
```

4. This needs to be done after step 3: in psql while connected to the sauce_db database, import the seed.sql file:
```
\i /Users/pavankatepalli/Desktop/git/WDI_skywalker_instructors/w06/labs_homework/tuesday_app/seed.sql
```

# Assignment

You will be making a basic Customer Relationship Management (CRM) System for a distributor of sauces. The distributor works with retailers that sell the sauces.

The app will look like this when done: http://screencast.com/t/itLakSGF2JJ 

# Part 1

Make these get routes work
	* app.get('/')
	* app.get('/manufacturers')
	* app.get('/manufacturers/:id')
	* app.get('/sauces')
	* app.get('/customers')
	* app.get('/customers/:id')

Make these new routes work
	* app.get('/new-manufacturer')
	* app.get('/new-sauce')
		* use a select drop dwon for manufacturer_id
	* app.get('/new-customer')
	* app.get('/new-customer-purchase')
		* use a the select drop down for customer_id
		* use a the select drop down for sauce_id

Make the create routes work
	* app.post('/create-manufacturer')
	* app.post('/create-sauce')
	* app.post('/create-customer')
	* app.post('/create-customer-purchase')

Make these edit routes work
	* app.get('/edit-sauce/:id')
		* use an input for the manufacturer_id 
	* app.get('/edit-customer-purchase/:id')
		* use an input for the customer_id
		* use an input for the sauce_id
	* app.get('/edit-customer/:id')
	* app.get('/edit-manufacturer/:id')


Make these update routes work
	* app.put('/update-sauce/:id')
	* app.put('/update-customer-purchase/:id')
	* app.put('/update-customer/:id')
	* app.put('/update-manufacturer/:id')

Make these delete routes work
	* app.delete('/delete-customer/:id')
	* app.delete('/delete-manufacturer/:id')
	* app.delete('/delete-sauce/:id')


Make it pretty

# Bonus


* in app.get('/edit-sauce/:id')
	* put in the select drop down for manufacturer_id

* in app.get('/edit-customer-purchase/:id')
	* put in the select drop down for customer_id
	* put in the select drop down for sauce_id

* when deleting a customer make sure you delete the related customer_email record and any customer_purchase records

* when deleting a manufacturer, delete the associated sauces and sauce_prices

* when deleting a sauce also delete the sauce's price

