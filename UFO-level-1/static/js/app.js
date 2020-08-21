// from data.js
var tableData = data;

// 
console.log(tableData);

var tbody = d3.select("tbody");
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn");


tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  



