// from data.js
var tableData = data;

// check all data
console.log(tableData);


// load the table with all of the sightings data
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// add var's for SELECT
var tbody = d3.select("tbody");
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn");





