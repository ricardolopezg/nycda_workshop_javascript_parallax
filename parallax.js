$(document).ready(function() {

$(window).scroll(function() {
  var x = $(this).scrollTop();
  
  $("#one").css("background-position", "0px " + ((-x / 5.2)) + "px");
  $("#two").css("background-position", "0px " + ((-x / 3)) + "px");
  $("#three").css("background-position", "0px " + ((-x / 2)) + "px");
  $("#four").css("background-position", "0px " + ((-x / 1)) + "px");
  
})

  // $("#balloons_up").animate({"left": "+=500"}, 2000;
  // $("#balloons_up").animate({"left": "-=300"}, 1000);


  



}) // end doc ready