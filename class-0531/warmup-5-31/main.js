


$(document).ready(function() {

  // your code goes here
  

    $('.color-button').on('click', function() {
      let color = generateColor();

      $(this)
        .css('background-color')
        .html('color');
    });

    function generateColor(){
      let red = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`
    }
})

