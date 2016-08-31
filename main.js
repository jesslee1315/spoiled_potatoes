$(document).ready(function(){
  $("#top").hide().slideToggle(1000);
  $("#bottom").hide().slideToggle(1000);
  $("#left").hide().fadeIn(2000);
  $("#right").hide().fadeIn(2000);
}); //DIV TRANSITIONS

    $(".invisible_div").one("click", function(){
      $(".div_for_skip_butt").append('<a class="waves-effect waves-light btn-large" id="skip_butt">SKIP</a>')
      $("#skip_butt").fadeIn(4000); //BUTTON FADES IN

        //WHEN BUTTON IS CLICKED
        $("#skip_butt").one("click", function(){
          $(".div_for_logo").append(`<h1 class="logo"><img class="logo" id="potato_icon" src="./Project/icon/Potato-64.png"/>SPOILED PATATOES</h1>`)
          $(".logo").fadeIn(30000)
          });
          $(".div_for_logo").on("click", function(){
            window.location.assign(`http://localhost:8000/Project/index_1.html`);
            // CHANGE TO FIREBASE
          });
        });
