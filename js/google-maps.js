// $('.get-route').on('click', '.directions-button', function(e){
//     e.preventDefault();
//     var begin = $('#location').val();
//     $('#location').val('');
//     var podnahs = new google.maps.LatLng(45.562865, -122.648256);
//     var transportationMethod = $('.active').attr('alt')

//     function calcRoute() {
//       var start = begin;
//       var end = podnahs;
//       var request = {
//         origin:start,
//         destination:end,
//         travelMode: google.maps.TravelMode[transportationMethod]
//       };
//       directionsService.route(request, function(result, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//           directionsDisplay.setDirections(result);
//         }
//       });
//     }

//     //Google Matrix - Time/Miles
//     var service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//     {
//       origins: [begin],
//       destinations: [podnahs],
//       travelMode: google.maps.TravelMode[transportationMethod],
//       unitSystem: google.maps.UnitSystem.IMPERIAL
//     }, callback);


//     calcRoute();
// })

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize(pin, city) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:12
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);

  var address = pin + ' ' + city
  var geocoder = new google.maps.Geocoder();

   geocoder.geocode({
      'address': address
   },
   function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
         new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
         });
         map.setCenter(results[0].geometry.location);
      }
   });

  var markerOptions = {
    position: new google.maps.LatLng(45.562865, -122.648256)
  };
  var marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);
}

// function callback(response, status) {
//   var distance = response.rows[0].elements[0].distance.text;
//   var time = response.rows[0].elements[0].duration.text;
//   $('p.get-route').replaceWith('<p class="get-route">Time: '+ time + ' Distance: ' + distance + '</p>')
// }

