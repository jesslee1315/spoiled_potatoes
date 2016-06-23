$(document).ready(function(){
  $("#top").hide().slideToggle(1000);
  $("#bottom").hide().slideToggle(1000);
  $("#left").hide().fadeIn(2000);
  $("#right").hide().fadeIn(2000);
});

$(document).one("click", function(){
  $(".div_for_skip_butt").append('<a class="waves-effect waves-light btn-large" id="skip_butt">SKIP</a>')
  $("#skip_butt").fadeIn(4000);

    $("#skip_butt").one("click", function(){
      $("#video.src").pause();
        $("main").css("background-color", "black")
        // ({"background-color":"black", "z-index":"2"})
        // $('#video').attr('src', $('#video').attr('src'));
        $(".div_for_logo").append('<h1 class="logo">' + '<img class="logo" id="potato_icon" src="./Project/icon/Potato-64.png"/>' + "SPOILED PATATOS "+ '</h1>')
        $(".logo").fadeIn(30000)
      // })
    })
});








// $(document).ready(function(){
//   var api = "https://api.spotify.com/v1/search?";
//   // artist search
//
//   $("#user_text").change(function(){
//     var input = $("#user_text").val();
//     var url = api + "type=artist&q=" +input;
//   $.get(url, function(my_result){
//     console.log(my_result);
//     });
//   });
// });
