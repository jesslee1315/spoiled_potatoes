var my_movies_info_key = "b3b5764bd01116e8180010a054fa2bb3";

$(document).ready(function(){
      // MOVIES IN THEATERS AJAX CALL

      var title_list = [];
      $.get(`http://api.themoviedb.org/3/movie/now_playing?api_key=${my_movies_info_key}`, function(my_data){
        for (var i = 0; i < my_data.results.length; i++) {
          var title = my_data.results[i].original_title;
          var poster_string = my_data.results[i].poster_path;
          var votes = my_data.results[i].vote_average;
          var overview = my_data.results[i].overview;
          var poster_images = `https://image.tmdb.org/t/p/w300${poster_string}`
          $(".carousel").append(`<a class="carousel-item" href=${i}><img class="poster_inTheaters"src=${poster_images}></a>`)
          title_list.push(title);
        };
        $('.carousel').carousel();

         $("#now_playing_butt").one("click",function(){
           $(".title_now_playing ul").append(`<li>${title_list}</li>`)
         })
      });



        // UPCOMING MOVIES AJAX CALL
        $.get(`http://api.themoviedb.org/3/movie/upcoming?api_key=${my_movies_info_key}`, function(my_data_upComing){
          for (var i = 0; i < my_data_upComing.results.length; i++) {
            var title_upComing = my_data_upComing.results[i].original_title;
            var poster_string_upComing = my_data_upComing.results[i].poster_path;
            var overview_upComing = my_data_upComing.results[i].overview;
            var poster_images_UpComing = `https://image.tmdb.org/t/p/w300${poster_string_upComing}`
          };
        });

            // YOUTUBE AJAX CALL
          //   var my_youTube_key = "AIzaSyCltwf9a0iWjc2sQ3MnZua4mFxqF119-A0";
          //   // when title is typed in OR if title is clicked on, the title should enter into "title" string
          //   $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q${title}&type=video&key=my_youTube_key`, function(data){
          //   var video_id = data.items[0].id.videoId);
          //   console.log(video_id);
          //   var a_href = `https://www.youtube.com/watch?v=${videoId}`
          // })

});
