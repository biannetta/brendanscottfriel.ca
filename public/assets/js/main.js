$(document).ready(function() {
  var token = '3016048789.28578ca.c7bf8046303941fda6ea61b6f97e5eee',
  userid = 3016048789,
  num_photos = 4; 

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      var list = $('#instafeed');
      for( x in data.data ){
        var image = data.data[x];
        console.log(image);
        list.append('<a style="text-decoration: none;" href="'+image.link+'" target="_blank"><div data-likes="'+image.likes.count+'" class="feed__row__item--instagram pic" style="background-image:url('+image.images.low_resolution.url+');"><span class="overlay"><i class="fas fa-heart"></i> '+image.likes.count+'</span></div></a>');
      }
    },
    error: function(data){
      console.log(data); // send the error notifications to console
    }
  });
});
