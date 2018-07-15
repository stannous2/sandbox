

let URL = "https://api.giphy.com/v1/gifs/search?api_key=Gpjf3CoZDB0rntj3u0BcEiGQXV7NVh4H&limit=5&q=";

$('.topic-button').on('click', '.btn', function (e) {


    let queryURL = URL + selectedButton;
    console.log('queryURL = ' + queryURL);
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        //after the data from the AJAX request comes back
        .then(function (response) {

            
        })
});