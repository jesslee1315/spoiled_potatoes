var my_movies_info_key = "b3b5764bd01116e8180010a054fa2bb3";

$(document).ready(function(){
      var container_overview = [];
      var container_votes = [];

      //Grabbing value of input text field using enter!!!
      $(".enter").submit(function(e){
        e.preventDefault();
        var user_searched = $("#search").val();
        grab_youTube_movieTitles(user_searched)
      })

      // YOUTUBE AJAX CALL
      function grab_youTube_movieTitles(title){
        // var my_youTube_key = "AIzaSyCltwf9a0iWjc2sQ3MnZua4mFxqF119-A0";
        // pass typed in OR if title is clicked to (title).
        $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&key=AIzaSyCltwf9a0iWjc2sQ3MnZua4mFxqF119-A0`, function(data){
        var video_id = (data.items[0].id.videoId);
        // `https://www.youtube.com/watch?v=${video_id}`
        window.location.replace(`https://www.youtube.com/watch?v=${video_id}`);
        })
      };


      // MOVIES IN THEATERS AJAX CALL
      $.get(`http://api.themoviedb.org/3/movie/now_playing?api_key=${my_movies_info_key}`, function(my_data){
        for (var i = 0; i < my_data.results.length; i++) {
          var title= my_data.results[i].original_title;
          var poster_string = my_data.results[i].poster_path;
          var votes = my_data.results[i].vote_average;
          var overview = my_data.results[i].overview;
          var poster_images = `https://image.tmdb.org/t/p/w300${poster_string}`

          //Storing overview in an array
          container_overview.push(overview)

          //Storing votes in an array
          container_votes.push(votes)

          // Appends title to div
          var title_list = $(".title_now_playing ul").append(`<li class="class_title_inTheaters" id=${title}>${title}</li>`)

            // Dynanic poster carousel being created.
          $(".carousel").append(`<div class="carousel-item"><img id=${i} class="poster_inTheaters" src=${poster_images}></div>`)
        } //FOR LOOP ENDS HERE


        // $("#listPreReq").on('click', 'li', function() {
        //     alert($(this).html());
        // }); ******************LOOOOOOOKKKKKK AT THISSSSSSSSSSSS!!!!!


        //Now playing list link to youtube
        $('ul').on('click', '.class_title_inTheaters', function(){
          var li_innerHTML = this.innerHTML;
          grab_youTube_movieTitles(li_innerHTML)
        })
          //Function to show carousel
          $('.carousel').carousel();

          //hidden until button is pressed.
          //note must retract list when button is clicked on again
          $(title_list).hide();
          $("#now_playing_butt").one("click",function(){
            $(title_list).fadeIn("very slow");
          })
          // Dynmically creating modals
          $(".poster_inTheaters").one("click", function(){
            $("p").empty();
            var modal_overview = container_overview[+this.id]
            var modal_votes = container_votes[+this.id]
            $(".modal-content").append(`<p>${modal_overview}</p><p>Potato votes: ${modal_votes}</p>`)
            $('#modal1').openModal();
          })

      });



        // UPCOMING MOVIES AJAX CALL
        $.get(`http://api.themoviedb.org/3/movie/upcoming?api_key=${my_movies_info_key}`, function(my_data_upComing){
          for (var i = 0; i < my_data_upComing.results.length; i++) {
            var title_upComing = my_data_upComing.results[i].original_title;
            var poster_string_upComing = my_data_upComing.results[i].poster_path;
            var overview_upComing = my_data_upComing.results[i].overview;
            var vote_upComing = my_data_upComing.results[i].vote_average;
            var poster_images_UpComing = `https://image.tmdb.org/t/p/w300${poster_string_upComing}`
            console.log(poster_images_UpComing);

            //Storing overview in an array
            container_overview.push(overview_upComing)

            //Storing votes in an array
            container_votes.push(vote_upComing);

            // Appends title of Up coming to div
            var title_list_upComing = $(".title_upComing ul").append(`<li class="class_title_upComing" id=${title_upComing}>${title_upComing}</li>`)

              // Dynanic poster carousel being created.
            $(".second_carousel").append(`<div class="carousel-item"><img id =${i} class="poster_upComing" src=${poster_images_UpComing}></div>`)
          }; //FOR LOOP ENDS HERE


          //Upcoming list link to youtube
          $('ul').on('click', '.class_title_upComing', function(){
            var li_innerHTML = this.innerHTML;
            grab_youTube_movieTitles(li_innerHTML)
          })

          // Shows carousel
          $('.box_2 .carousel').carousel();

          //note must retract list when button is clicked on again
          $(title_list_upComing).hide();
          $("#coming_soon_butt").one("click",function(){
            $(title_list_upComing).fadeIn("very slow");
          })
            $(".poster_upComing").one("click", function(){
              $("p").empty();
              var modal_overview_upComing = container_overview[+this.id]
              var modal_votes_upComing  = container_votes[+this.id]
              $(".modal-content").append(`<p>${modal_overview_upComing}</p><p>Potato votes: ${modal_votes_upComing}</p>`)
              $('#modal2').openModal();
            })
        });  //End of upcoming get request

});
