// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page 
//and then adds new rows of data for each UFO sighting.
tableData.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    
    Object.entries(UFOReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the `date/time` column to find rows that match user input.

// Select the button

var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function() {


// Complete the event handler function for the form
    tbody.html("");
    
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime").property("value");

    console.log(inputElement);
    
    var filteredData = tableData.filter(date => date.datetime === inputElement);

    console.log(filteredData);



filteredData.forEach(function(UFOReport) {
    var row = tbody.append('tr');

    Object.entries(UFOReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});