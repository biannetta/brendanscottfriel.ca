(function() {
   var artist = document.getElementsByClassName('artist-name')[0];
   var title  = document.getElementsByClassName('album-title')[0];
   var city   = document.getElementsByClassName('city')[0];
   var fb     = document.getElementsByClassName('fb-link')[0];
   var sc     = document.getElementsByClassName('sc-link')[0];

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
   setTimeout(function(){reveal(city)}, 1200);
   setTimeout(function(){reveal(fb, 'shift')}, 1200);
   setTimeout(function(){reveal(sc, 'shift')}, 1200);
})();
