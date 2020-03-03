// from data.js
var tableData = data;
// get reference from tbody
var tbody = d3.select('tbody');
// get reference from button
var button = d3.select('#filter-btn');

// YOUR CODE HERE!
// if filter is applied
button.on('click',function(){
    //select input element and get raw HTML node
    var inputElement = d3.select('#datetime');
    //get value property of input element
    var inputValue = inputElement.property('value');
    console.log(inputValue);
    //console.log(data);
    var filteredData = tableData.filter(tableData=>tableData.datetime===inputValue);
    //console.log(filteredData);
    //remove any children row
    tbody.html('');
    //replace all data with filtered data
    filteredData.forEach(function(fData){
        //console.log(fData);
        var row = tbody.append('tr');
        Object.entries(fData).forEach(function([key,value]){
            //console.log(key,value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});

tableData.forEach(function(sighting_data){
    //console.log(sighting_data);
    var row = tbody.append('tr');
    Object.entries(sighting_data).forEach(function([key,value]){
        //console.log(key,value);
        var cell = row.append('td');
        cell.text(value);
    });
});