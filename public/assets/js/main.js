$(document).ready(function() {
  AOS.init();
  
  let token = '3016048789.28578ca.c7bf8046303941fda6ea61b6f97e5eee';
  let userid = 3016048789;
  let num_photos = 4; 

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      var list = $('#instafeed');
      for( x in data.data ){
        let imageData = data.data[x];

        var imageDiv = $('<div>',{
          class: 'feed__row__item instagram',
          click: function() {
            window.open(imageData.link);
          }
        });
        imageDiv.attr('style', `background-image: url(${imageData.images.standard_resolution.url})`);
        imageDiv.append(`<span class="overlay"><i class="fas fa-heart"></i>${imageData.likes.count}</span>`);
        list.append(imageDiv);
      }
    },
    error: function(data){
      console.log(data); // send the error notifications to console
    }
  });
});
