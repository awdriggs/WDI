#### Exercise 1: How to use a backbone model
 - setup the rails app
   - `bundle install`
   - `rake db:create`
   - `rake db:migrate`
   - `rails s`

 - set up the object (make a new instance of a view)
```
sandwich_instance = new App.Models.CheeseSandwich();
```

 - call some methods on your new `sandwich_instance`:
   - set()
   - save()

 - look in the network tab to see that request 
 
 - create a new instance of Sandwich model, called sandwich_instance2

 - call some methods on sandwich_instance2
   - set()
   - save()
   
 - go into your `rails dbconsole`
 - run a sql query like:
```UPDATE cheese_sandwiches
SET cheese='american',
WHERE id=1;```
 - call fetch() on sandwich_instance
 - see what the value of `cheese` is on the `sandwich_instance`

 - set a change event on your sandwich instance
   - call set() on your instance
   - do a console.log from your change function

- change a property of one of your sandwiches with set(), and then call save() on it to update it to the DB

- call destroy() on one of your sandwiches
