var topics = ["horror","anime","baseball","movies","math","skate","art","fashion","funny","videogames"]

function renderButtons(){
    $("#button").empty();
    for(i = 0; i < topics.length; i++){
        var buttons = $("<button>").text(topics[i])
        buttons.attr("id", topics[i])
        buttons.addClass("topics")
        $("#button").append(buttons)
    }
}

function displayGif(){
    var topic = $(this).attr("id");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=9EHeN39gBFXMES8bye8aCt2SDxTc9wE5&q=" + topic + "&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            gifDiv.attr("id","pic");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-state","still");
            gifImage.addClass("gif")

            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);

            $("#gifs").prepend(gifDiv);
        }
    });
}

$("#add-button").on("click", function(event) {
    event.preventDefault();

    var newTopic = $("#topic-input").val().trim();

    topics.push(newTopic);

    renderButtons();

    $("#topic-input").val("")
});

$(document).on("click", ".gif", function(){
    console.log("HI!")
    // var toggle = {"still":"animate", "animate":"still"}
    // $(this).attr("src", $(this).attr("data-"+toggle[state]));
    // $(this).attr("data-state", toggle[state]);

    var state = $(this).attr("data-state")
    console.log(state)
    if (state === "still"){
        var imageURL = $(this).attr("data-animate")
        $(this).attr("src", imageURL)
        $(this).attr("data-state", "animate")
      }

      else{
        var imageURL = $(this).attr("data-still")
        $(this).attr("src", imageURL)
        $(this).attr("data-state", "still ")
      }
})

renderButtons();
$(document).on("click", ".topics", displayGif);

// Psuedocode:

// have the for loop in the displayGif function set each img
// to have data-status' as animate/static and different urls for each
// so that I can toggle each gif to pause/play on click.
// have the loop also set ids/data-names for the divs in for the gifs/ratings
// so that I can properly structure them with CSS.
// after that would be able to much easier structure the entire page.