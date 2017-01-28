(function() {
   var artist = document.getElementsByClassName('artist-name')[0];
   var title  = document.getElementsByClassName('album-title')[0];

   var revealTitle = function(elem) {
     elem.className = elem.className + ' reveal-headers';
   }

   setTimeout(function(){revealTitle(artist)}, 500);
   setTimeout(function(){revealTitle(title)}, 1200);
})();
