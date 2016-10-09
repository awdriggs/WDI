# Week 5 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w05/d05 directory.  

Please work in a gist.  

The first 4 questions will assess your ability to recall and explain core concepts from the week with your own words. Each question should be answered within a few sentences.    

1. What are the advantages of using a database as a means to store persistant data?  Please reference ACID.  

2. Explain how a web server (like the ones we have written this week) processes incoming requests from a client (browser) step-by-step.

3. What is a database schema?  

4. Given the following route from an express.js server file

```
app.put('/orders/:id', function(req, res) {
	var orderIndex     = req.params.id;
	var orderParams = req.body;
	
	flatfile.db('data.json', function (err, data) {
		if (err) throw err;

		data.orders[orderIndex] = orderParams

		data.save(function(err){
			res.render('home', data);
		});
	});
});
```


Explain what this code is doing.  What does the server do when this route is visited?  What changes are made to our database?  What does the browser do?  (You may assume that everything works and has been defined in context).

<hr>

5. What is the CRUD? Please explain in the context of apps that we will make in class.

6. Explain the different HTTP verbs, why and how we use them.

<hr>

7. Why do we do `npm init`. What does it do? What is a `package.json`

8. What is a Node Packaged Module? What are some of the modules that we used and what are they used for?

<hr>

9. How do we use forms to submit data to a server? What are some attributes of a form that we learned? Why and how are they used?

10. Forms only have 2 methods of submitting What are they? How can we go about using the other 2 methods that aren't supported by default.










