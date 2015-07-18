var populateSingleEventView = function() {
    var source      = $("#single-event-template").html();
    var template    = Handlebars.compile(source);
    var context     = {
                        title: "Event Title",
                        location: "Sunnyvale, CA",
                        image: "http://www.officialpsds.com/images/stocks/Concert-stock3112-large.png",
                        date: "July 1, 2015"
                      };
    var html        =  template(context);

    $('.container').html(html);
}