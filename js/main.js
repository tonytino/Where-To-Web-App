// Base link for ajax calls
baseURL = 'https://whereto-server.herokuapp.com'

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


