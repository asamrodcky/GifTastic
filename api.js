var topics = ["horror","anime","baseball","movies","math","skate","art","fashion","funny","videogames"]

for(i = 0; i < topics.length; i++){
    var buttons = $("<button>").text(topics[i])
    buttons.attr("id", topics[i])
    $("#button").append(buttons)
    console.log(topics[i])
}

$("#button").on("click",function(){
    
})

var idea = "funny"
var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=9EHeN39gBFXMES8bye8aCt2SDxTc9wE5&q=" + idea + "&limit=10"

function showImg(obj) {
    $("#gifs").append($("<img>").attr("src", obj.images.downsized.url));
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    response.data.forEach(showImg);
});

var sample = function(){
   var a = b = 3;
}
sample();
console.log("Is a defined?", typeof a !== "undefined");
console.log("Is b defined?", typeof b !== "undefined");