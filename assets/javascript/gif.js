// TODO: Under every gif, diplay its rating-- >
var gifCount = 10;
var stopRating = 'PG';

// Create an Array of Strings.Save it to a Variable called 'Topics' -- >

var topics = [

    'Bugs Bunny',
    'Elmyra Duff',
    'Tasmanian Devil',
    'Porky Pig',
    'Elmer Fudd',
    'Syvester The Cat',
    'Daffy Duck',
    'Yosemite Sam',
    'Tweety Bird',
    'Wile E Coyote'];

// Using loop that appends a button for each string in the arrray
for (var i = 0; i < topics.length; i++) {

}

// TODO: Make function call that each topic in the array, remkaes the button on page-- >

// TODO: Create vaule for the form for user input box and adds it into my 'Topic array' -- >
// $(document).on("click", ".yourClassNameYouWantTOTarget", function () {
//code goes here
// })


var gifSearch = "tiny toons adventures";

// TODO: Place GIPGY API on page-- >
var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=nPMtSnokNV7yOlwbU1DYxwYcywrpFTJq&q=${gifSearch}&limit=10&offset=0&rating=G&lang=en`
// TODO: Creat AJAX URL
$.ajax({
    url: queryURL,
    method: "GET"

    // After data comes back from the request
}).then(function (response) {
    console.log("response check", response);

    // Rating results
    var p = $("<p>").text("Rating: " + results[i].rating);

    // Creating and storing an image tag
    var tinyToonsImage = $("<img>");




});


// TODO: Create user clicks on button / non - animated gif images-- >

// TODO: Create user clicks on the STILL GHIPY images-- >




