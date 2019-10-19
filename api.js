var topics = ["horror","anime","baseball","movies","math","skate","art","fashion","funny","videogames"]

for(i = 0; i < topics.length; i++){
    var buttons = $("<button>").text(topics[i])
    buttons.attr("id", topics[i])
    buttons.addClass("gifs")
    $("#button").append(buttons)
}
function showImg(obj) {
    $("#gifs").append($("<img>").attr("src", obj.images.downsized.url));
}

function displayGif(){
    $("#gifs").empty();
    var topic = $(this).attr("id");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=9EHeN39gBFXMES8bye8aCt2SDxTc9wE5&q=" + topic + "&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        response.data.forEach(showImg);
    });
}

$(document).on("click", ".gifs", displayGif);