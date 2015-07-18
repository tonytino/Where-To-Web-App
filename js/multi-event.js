
// Example of using Handlebars
// this would live within a callback for a jQuery event handler
// the context variable should hold an array of json objects representing events
// and would require at least the details in the example below

var source      = $("#multi-event-template").html();
var template    = Handlebars.compile(source);
var context     = [{
                    title: "Event Title",
                    location: "Sunnyvale, CA",
                    image: "http://www.officialpsds.com/images/stocks/Concert-stock3112-large.png",
                    date: "July 1, 2015"
                }];
var html        =  template(context);
