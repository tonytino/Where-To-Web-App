// Base link for ajax calls
baseURL = 'https://whereto-server.herokuapp.com';

var clearContainer = function() {
    $('.container').empty();
}

// Temporary means to fake signing in/out
$("a:contains('Sign')").click(function(event){
    event.preventDefault();

    var originalLinkText = $(this).text();

    // if not signed in yet
    if ( originalLinkText.includes('In') ) {
        // fake signed in state
        $("a:contains('Sign')").text('Sign Out');

        clearContainer();
        populateMultiEventView();
    } else {
        // fake signed out state
        $("a:contains('Sign')").text('Sign In');

        clearContainer();
    }
})

// Takes user to Single Page view if Home button is clicked
$("a:contains('Home')").click(function(event){
    event.preventDefault();
    clearContainer();
    populateSingleEventView();
})

// User Login
$('.container').on('click','.fb-auth', function(event){
   event.preventDefault();
   fbAuth().then(function(authData){
    console.log(authData)
      var firstName = authData.facebook.cachedUserProfile.first_name;
      var lastName = authData.facebook.cachedUserProfile.last_name;

      // Alex's work around because FB doesn't send back an email address for me
      var email = 'alexheinen@comcast.net'//authData.facebook.email;
      var picture = authData.facebook.cachedUserProfile.picture.data.url;
      var userInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        image: picture
      }
      createUser(userInfo);
    }, { scope: "email" });
});

$('.container').on('click', '.no-click', function(e){
    e.preventDefault();
    discardEvent();
  });

$('.container').on('click', '.yes-click', function(e){
    e.preventDefault();
    addEvent();
  });