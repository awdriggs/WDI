#### Exercise 1: AJAX with an API

* Hit this url http://www.omdbapi.com/?t=the+terminator&y=&plot=full&r=json using the jQuery $.ajax function and display the Title, Year Rated, Plot on the screen on page load

* Bonus 1: make a button. attach an event listener to the button. make the ajax call when the button event fires.

* Bonus 2: using the omdb api, display the rotten tomatoes ratings. HINT One: Check out the API Documentation Here to see how to get the rotten tomato stuff into the url: http://omdbapi.com/

* Bonus 3: make an input box and button that, when the button is clicked makes an ajax call with the title/string that the user has entered into the input box.

* Bonus 4: Make some checkboxes for each parameter that the user would like. (https://api.jquery.com/checked-selector/)

* Bonus 5: Empty the input after the button has clicked.

* Bonus 6: Don't empty the input if the response to the request is empty. 

* Bonus 7: Display something to the user if the response is empty. 

* Bonus 8: Display the bonus 6 for only 10 seconds.

* Bonus 9: Style the page to make everything readable. 

#### Exercise 2

https://data.cityofnewyork.us/api/views/kh3d-xhq7/rows.json?accessType=DOWNLOAD

1. Click a button and display all the Queens library branches.
2. Create a checkbox that says 'Only open on Sundays'. When this is checked, only display branches open on Sundays along with their Sunday hours.
3. Bonus - Create filters for Day of Week and Hours to filter through the data
