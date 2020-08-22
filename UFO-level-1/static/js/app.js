// from data.js
var tableData = data;

// check all data
console.log(tableData);

// add var's for SELECT
var tbody = d3.select("tbody");
var form = d3.select("form");
var filter_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");


// load the table with all of the sightings data
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Create event handlers 
form.on("submit", runFilter);
filter_button.on("click", runFilter);
clear_button.on("click", runClear);

// define clear filter function
function runClear() {
    d3.event.preventDefault();
    // clear the table
    tbody.html("");
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


// define runEnter filter function
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
    console.log(filteredData);

    // clear the table
    tbody.html("");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


}





