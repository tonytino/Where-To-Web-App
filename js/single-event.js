var populateSingleEventView = function(response) {
    var source      = $("#single-event-template").html();
    var template    = Handlebars.compile(source);
    var context     = {
                        title: response.event.name,
                        location: response.event.venue,
                        image: response.event.image,
                        date: response.event.start_time
                      };
    var html        =  template(context);

    $('.container').html(html);
    $('.se-img').attr('id', response.event.id);
    initialize(response.event.venue);
}

var createWishlist = function(data) {
  var user_id = $('.container').attr('id')
  var event_id = $('.se-img').attr('id');
  var url = baseURL + '/users/' + user_id + '/events/' + event_id + '/wishlists'
  $.ajax({
    url: url,
    type: "POST",
    data: data
  })
  .done(function(response){
    // if (response.event.description) {
    //   var desc = "<p>Description: " + response.event.description + "</p>";
    // } else {
    //   var desc = "<p>Description: Not Provided.</p>"
    // }
    populateSingleEventView(response);
  })
  .fail(function(){
    alert('fail');
  })
}

var addEvent = function() {
  $('.image').fadeOut();
  var data = {accepted: true};
  createWishlist(data);
}

var discardEvent = function() {
  $('.image').fadeOut();
  var data = {accepted: false};
  createWishlist(data);
}