// unfinished
// 1. Click a button and display all the Queens library branches.
// 2. Create a checkbox that says 'Only open on Sundays'. When this is checked, only display branches open on Sundays along with their Sunday hours.
// 3. Bonus - Create filters for Day of Week and Hours to filter through the data


$(document).ready(function() {
    $('#pressy').click(makeCall);
})

var makeCall = function() {

    $.ajax({
        url: "https://data.cityofnewyork.us/api/views/kh3d-xhq7/rows.json?accessType=DOWNLOAD"
    }).done(function(data) {
        debugger;
        console.log(data)
    }).fail( function(message) {
        console.log(message);
    })


}

console.log("BRO!");

//get name
//data.data[0][8]

//ge number
//data.data[0][9]