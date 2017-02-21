(function() {
   var artist = document.getElementsByClassName('artist-name')[0];
   var title  = document.getElementsByClassName('album-title')[0];

   var reveal = function(elem, easeIn) {
     var cls = '';
     if (!easeIn) {
       cls = 'reveal';
     } else {
       cls = easeIn
     }
     elem.className = elem.className + ' ' + cls;
   }

   setTimeout(function(){reveal(artist)}, 500);
   setTimeout(function(){reveal(title)}, 1200);
})();
