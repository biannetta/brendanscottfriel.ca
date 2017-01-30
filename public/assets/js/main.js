(function() {
   var artist = document.getElementsByClassName('artist-name')[0];
   var title  = document.getElementsByClassName('album-title')[0];
   var city   = document.getElementsByClassName('city')[0];

   var reveal = function(elem) {
     elem.className = elem.className + ' reveal';
   }

   setTimeout(function(){reveal(artist)}, 500);
   setTimeout(function(){reveal(title)}, 1200);
   setTimeout(function(){reveal(city)}, 1200);
})();
