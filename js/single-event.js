var populateSingleEventView = function(response) {
    var source      = $("#single-event-template").html();
    var template    = Handlebars.compile(source);
    var context     = {
                        title: response.event.title,
                        location: response.event.venue,
                        image: response.event.image,
                        date: response.event.start_time
                      };
    var html        =  template(context);

    $('.container').html(html);
}