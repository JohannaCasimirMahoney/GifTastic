
// TODO: Create docu ready function
$('document').ready(function () {
    // TODO: Create an Array of Strings.Save it to a Variable called 'Topic' -- >
    var topic = [

        'bugs bunny',
        'elmyra duff',
        'tasmanian devil',
        'porky pig',
        'elmer fudd',
        'syvester the cat',
        'daffy duck',
        'yosemite same',
        'tweety bird',
        'wile e coyote'];

}


// TODO: Place GIPGY API on page-- >
var APIKey = "nPMtSnokNV7yOlwbU1DYxwYcywrpFTJq";
// TODO: Create user clicks on button / non - animated gif images-- >
// TODO: Create user clicks on the STILL GHIPY images-- >

// TODO: Creat AJAX URL
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// TODO: Under every gif, diplay its rating-- >
// TODO: Add a form to the page-- >
// TODO: Create vaule for the form for user input box and adds it into my 'Topic array' -- >
// TODO: Make function call that each topic in the array, remkaes the button on page-- >