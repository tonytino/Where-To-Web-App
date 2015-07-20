// Objective:
// Row across top of container for switching views
// Three buttons: Single | Multi | Wishlist
// Selected view is secondary button, others are primary
// Row is inserted after the new view is loaded in (fadein)


// Implementation:

var buildNavBar = function(buttonText) {
    // Row across top of container for switching views
    var navBarRow = '<div id="nav-bar" class="hide row">';
    var openNavButton = '<div class="small-4 column text-center"><a href="#" class="nav-button';
    var closeDiv = '</div>';
    var closeNavButton = '</a>' + closeDiv;

    // Three buttons: Single | Multi | Wishlist
    var views = ['Single', 'Multi', 'Wishlist'];

    // Selected view is secondary button, others are primary
    for (var i = 0; i<views.length; i++) {
        navBarRow += openNavButton + ' button ';
        views[i] !== buttonText ? navBarRow += 'primary">' : navBarRow += 'secondary">';
        navBarRow += views[i] + closeNavButton
    }

    return navBarRow += closeDiv;
}

