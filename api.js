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

function showImg(obj) {
    $("#gifs").append($("<img>").attr("src", obj.images.downsized.url));
}

function displayGif(){
    var topic = $(this).attr("id");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=9EHeN39gBFXMES8bye8aCt2SDxTc9wE5&q=" + topic + "&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            console.log(gifDiv);
            gifDiv.attr("id","gif");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifImage.attr("data-state","animate")

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

renderButtons();
$(document).on("click", ".gifs", displayGif);