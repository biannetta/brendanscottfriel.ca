$(document).ready(function() {
  var token = '1486470.aa30447.a6e9f20349ce4647b43486e634890acf',
  userid = 1486470,
  num_photos = 6; 

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      var list = $('#instafeed').append('<ul>');
      for( x in data.data ){
        list.append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
        // data.data[x].images.thumbnail.url - URL of image 150х150
        // data.data[x].images.standard_resolution.url - URL of image 612х612
        // data.data[x].link - Instagram post URL 
      }
    },
    error: function(data){
      console.log(data); // send the error notifications to console
    }
  });
});
