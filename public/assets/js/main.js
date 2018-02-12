$(document).ready(function() {
  var token = '3016048789.28578ca.c7bf8046303941fda6ea61b6f97e5eee',
  userid = 3016048789,
  num_photos = 10; 

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      var list = $('#instafeed');
      for( x in data.data ){
        list.append('<div data-aos="flip-up"><a href="'+data.data[x].images.thumbnail.url+'" target="_blank"><img src="'+data.data[x].images.low_resolution.url+'"></a></div>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
      }
    },
    error: function(data){
      console.log(data); // send the error notifications to console
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 19) {
      $('.music-hero').fadeOut();
    } else {
      $('.music-hero').fadeIn();
    }
  });

  AOS.init({
    duration: 1200,
  });
});
