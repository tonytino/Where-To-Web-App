// Objective:
// Row across top of container for switching views
// Three buttons: Single | Multi | Wishlist
// Selected view is secondary button, others are primary
// Row is inserted after the new view is loaded in (fadein)


// Implementation:

var buildViewSelectionBar = function(buttonText) {
    // Row across top of container for switching views
    var viewSelectRow = '<div id="nav-bar" class="hide row">';
    var openViewSelectButton = '<div class="small-4 column text-center"><a href="#" class="view-select button ';
    var closeDiv = '</div>';
    var closeViewSelectButton = '</a>' + closeDiv;

    // Three buttons: Single | Multi | Wishlist
    var views = ['Single', 'Multi', 'Wishlist'];

    // Selected view is secondary button, others are primary
    for (var i = 0; i<views.length; i++) {
        viewSelectRow += openViewSelectButton;
        viewSelectRow += (views[i] !== buttonText ? 'primary">' : 'secondary">');
        viewSelectRow += views[i] + closeViewSelectButton;
    }

    return viewSelectRow += closeDiv;
}

var insertViewSelectionBar = function(buttonText) {
    $('#container').prepend(buildViewSelectionBar(buttonText));
    $('#nav-bar').fadeIn('600');
}

// Nav Bar Event Handler
$('#container').on('click', '.view-select', function(event){
    event.preventDefault();
    var buttonText = $(this).text();
    console.log(buttonText);

    clearContainer();

    switch(buttonText) {
        case "Single":
            populateSingleEventView();
            break;
        case "Multi":
            populateMultiEventView();
            break;
        case "Wishlist":
            populateWishlistView();
            break;
    }

    // Row is inserted after the new view is loaded in (fadein)
    insertViewSelectionBar(buttonText);
})
