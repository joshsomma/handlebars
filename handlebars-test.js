//data and functions for handlebars demo

//set up data object
var theData = {headerTitle:"Shop Page", weekDay:”Wednesday”}; 


// Retrieve the HTML from the script tag we setup in step 1
// We use the id (header) of the script tag to target it on the page
var theTemplateScript = $("#header").html();

var theTemplate = Handlebars.compile(theTemplateScript);

$(document.body).append(theTemplate(theData));  
