// from data.js
var tableData = data;
// get reference from tbody
var tbody = d3.select('tbody');
// get reference from button
var button = d3.select('#filter-btn');

// for uniqueCity array, every 'new' value (city) from tableData is added to uniqueCity(?) 
var uniqueCity = [...new Set(tableData.map(city=>city.city))];
console.log(uniqueCity);

var uniqueState = [... new Set(tableData.map(state=>state.state))];
console.log(uniqueState);

var uniqueCountry = [... new Set(tableData.map(country=>country.country))];
console.log(uniqueCountry);

var uniqueShape = [... new Set(tableData.map(shape=>shape.shape))];
console.log(uniqueShape);

var uniqueDate = [... new Set(tableData.map(datetime=>datetime.datetime))];
console.log(uniqueDate);
// define length of unique value arrays
// city array
var uniqueCityLen = uniqueCity.length;
console.log(uniqueCity.length);
// state array
var uniqueStateLen = uniqueState.length;
console.log(uniqueStateLen);
// country array
var uniqueCountryLen = uniqueCountry.length;
console.log(uniqueCountryLen);
// shape array
var uniqueShapeLen = uniqueShape.length;
console.log(uniqueCountryLen);
// date array
var uniqueDateLen = uniqueDate.length;
console.log(uniqueDateLen);

// function to populate html list with available options from js list
function cc(value){
    // sets initial list as empty
    document.getElementById('shapelist').innerHTML='';
    // loops through entire list
    for(var i=0;i<uniqueShapeLen;i++){
        // checks if user input characters exist in list of strings in array
        if(((uniqueShape[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){
            // create element 'option'
            var node = document.createElement("option");
            // create text value with string at index i
            var val = document.createTextNode(uniqueShape[i]);
            // append the 'option' node
            node.appendChild(val);
            // add node to list in html file
            document.getElementById("shapelist").appendChild(node);
        }
    }
 
 }
function ac(value) { 
    document.getElementById('citylist').innerHTML = ''; 
        for (var i = 0; i<uniqueCityLen; i++) { 
            if(((uniqueCity[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
            { 
                var node = document.createElement("option"); 
                var val = document.createTextNode(uniqueCity[i]); 
                node.appendChild(val); 
                document.getElementById("citylist").appendChild(node); 
                } 
            } 
 };

 function bc(value) { 
   document.getElementById('statelist').innerHTML = ''; 
    for (var i = 0; i<uniqueStateLen; i++) { 
        if(((uniqueState[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
        { 
            var node = document.createElement("option"); 
            var val = document.createTextNode(uniqueState[i]); 
            node.appendChild(val); 

            document.getElementById("statelist").appendChild(node); 
            } 
        } 
};

function dc(value) {
   document.getElementById('countrylist').innerHTML='';
   for(var i=0;i<uniqueCountryLen;i++) {
       if(((uniqueCountry[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) {
           var node = document.createElement('option');
           var val = document.createTextNode(uniqueCountry[i]);
           node.appendChild(val);
           document.getElementById('countrylist').appendChild(node);
       }
   }
}

function ec(value) {
    document.getElementById('datelist').innerHTML='';
    for(var i=0;i<uniqueDateLen;i++) {
        if(((uniqueDate[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) {
            var node = document.createElement('option');
            var val = document.createTextNode(uniqueDate[i]);
            node.appendChild(val);
            document.getElementById('datelist').appendChild(node);
        }
    }
 }

// YOUR CODE HERE!
// if filter is applied
button.on('click',function(){
    //select input element and get raw HTML node
    var inputElement = d3.select('#datetime');
    var cityInput = d3.select('#cityInput');
    var stateInput = d3.select('#stateInput');
    var shapeInput = d3.select('#shapeInput');
    var countryInput = d3.select('#countryInput');
    //get value property of input element
    var inputValue = inputElement.property('value');
    var cityInputValue = cityInput.property('value');
    var stateInputValue = stateInput.property('value');
    var shapeInputValue = shapeInput.property('value');
    var countryInputValue = countryInput.property('value');

    console.log(inputValue);
    console.log(cityInputValue);
    console.log(stateInputValue);
    console.log(shapeInputValue);
    console.log(countryInputValue);
    //console.log(data);
    var filteredData = tableData.filter(tableData=>
        tableData.datetime===inputValue &&
        tableData.city===cityInputValue &&
        tableData.state===stateInputValue &&
        tableData.shape===shapeInputValue &&
        tableData.country===countryInputValue
        );
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


// default view on page load
data.forEach(function(sighting_data){
    //console.log(sighting_data);
    var row = tbody.append('tr');
    Object.entries(sighting_data).forEach(function([key,value]){
        //console.log(key,value);
        var cell = row.append('td');
        cell.text(value);
    });
});