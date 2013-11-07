$(document).ready(function(){

  $('#get_color').click(function(event) {
    event.preventDefault();
    $.post("/color", function(color) {
      var cell_color = color;
      var cell_pos = Math.floor(Math.random() * 9) + 1;
      
       $('#color_me').find($("li:nth-child(" + cell_pos + ")")).css('backgroundColor', cell_color)
      // console.log(finder)
      // finder.style.backgroundColor="#FFF";
    })

  })

});
