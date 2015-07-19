var ref = new Firebase("https://wheretodbc.firebaseIO.com");

var fbAuth = function(){
  var promise = new Promise(function(resolve, reject){
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        reject(error);
      } else {
        resolve(authData);
      };
    });
  })
  return promise;
};
var createUser = function(obj){
  $.ajax({
    url: baseURL + '/users',
    method:'POST',
    data: obj
  })
  .done(function(response){
    var user_id = response.user.id.toString();
    $('.container').attr('id', user_id);
    if (response.event != null) {
      populateSingleEventView();
    }
    else {
      console.log('no preferences page yet');
    }
  })
  .fail(function(){
    console.log("fail");
  })
}