video query url:
var title = blah `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&key=AIzaSyCltwf9a0iWjc2sQ3MnZua4mFxqF119-A0`

wrap a tag inside poster images a tag: `https://www.youtube.com/watch?v=${videoid}`





window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);

t._e = [];
t.ready = function(f) {
  t._e.push(f);
};
return t;
}(document, "script", "twitter-wjs"));
