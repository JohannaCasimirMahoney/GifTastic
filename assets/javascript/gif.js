var topics = [

    "Bugs Bunny",
    "Plucky Duck",
    "Tasmanian Devil",
    "Porky Pig",
    "Elmer Fudd",
    "Babs Bunny",
    "Daffy Duck",
    "Yosemite Sam",
    "Tweety Bird",
    "Wile E Coyote",
    "Foghorn Leghorn",];

var button;
var newTopic = ""; // new topic when added in the input field 

// Makes new buttons from the topics array
var buttonGenerator = function () {

    $("#buttonArea").empty();
    // loops through the array and creats buttons
    for (i = 0; i < topics.length; i++) {
        button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data", topics[i]);
        $("#buttonArea").append(button);
    };
}


// The user clicks on  button, which generates 10 static, non-animated gif images from the GIPHY API and places on page. 
$("#buttonArea").on("click", ".btn", function () {
    var thing = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";

    $(".instructions").show();

    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            // a div is created to hold a gif of any topic
            var topicDiv = $("<div>");

            // Under every gif, display its rating (PG, G, so on).
            var p = $("<p>");
            p.text(results[i].rating);
            var p = $("<p>").text("Rating: " + results[i].rating);


            var topicImage = $("<img>").addClass("orangeBorder");

            // add states of animate and still which will be toggled 
            topicImage.attr("src", results[i].images.fixed_height_still.url);
            topicImage.attr("data-still", results[i].images.fixed_height_still.url);
            topicImage.attr("data-animate", results[i].images.fixed_height.url)
            topicImage.attr("data-state", "still")
            topicImage.addClass("gif");

            // image is appended to the div
            topicDiv.append(topicImage);
            // rating is appended to the div below the gif
            topicDiv.append(p);
            // new images will be placed at the beginning (top) of the containing gif area
            $("#gifArea").prepend(topicDiv);
        }
    })
})


// When the user clicks one of the still GIPHY images, and it animates. When the user clicks the gif again, it stops playing.
$("#gifArea").on("click", ".gif", function (event) {
    event.preventDefault();

    // gets the current state of the clicked gif 
    var state = $(this).attr("data-state");

    // according to the current state gifs toggle between animate and still 
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})


// The form takes the value from the input box. Then adds it into the topics array. The buttonGenerator function is called that takes each topic in the array remakes the buttons on the page.


$(".submit").on("click", function (event) {
    event.preventDefault();

    console.log("submit");
    // sets inputted value to newTopic 
    newTopic = $("#topic-input").val();
    // new topic is added to the topics array 
    topics.push(newTopic);
    console.log(topics);
    // call the function that creates the new button
    buttonGenerator();
});



buttonGenerator();