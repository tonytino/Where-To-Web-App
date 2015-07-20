
// add preferences selection menu to container (categories below can be removed once we have access through API)
var categories = {
                   categories: [{category_name: 'Concerts & Tour Dates'},
                   {category_name: 'Conferences & Tradeshows'},
                   {category_name: 'Comedy'},
                   {category_name: 'Education'},
                   {category_name: 'Kids & Family'},
                   {category_name: 'Festivals'},
                   {category_name: 'Film'},
                   {category_name: 'Food & Wine'},
                   {category_name: 'Fundraising & Charity'},
                   {category_name: 'Art Galleries & Exhibits'},
                   {category_name: 'Health & Wellness'},
                   {category_name: 'Holiday'},
                   {category_name: 'Literary & Books'},
                   {category_name: 'Museums & Attractions'},
                   {category_name: 'Neighborhood'},
                   {category_name: 'Business & Networking'},
                   {category_name: 'Nightlife & Singles'},
                   {category_name: 'University & Alumni'},
                   {category_name: 'Organizations & Meetups'},
                   {category_name: 'Outdoors & Recreation'},
                   {category_name: 'Performing Arts'},
                   {category_name: 'Pets'},
                   {category_name: 'Politics & Activism'},
                   {category_name: 'Sales & Retail'},
                   {category_name: 'Science'},
                   {category_name: 'Religion & Spirituality'},
                   {category_name: 'Sports'},
                   {category_name: 'Technology'},
                   {category_name: 'Other & Miscellaneous'}]
                };

var populatePreferencesSelectionView = function() {
    var source      = $("#preferences-selection-template").html();
    var template    = Handlebars.compile(source);
    var html        = template(categories);

    $('#container').html(html);
    $('.preferences').last().parent().addClass('end'); // prevents last preferences selection div from aligning itself with the right wall of the container
}

// change preferences selection button from selected to unselected styling

$('#container').on('click', '.preferences', function(event){
    event.preventDefault();
    $(this).toggleClass('selected');

    if ($(this).hasClass('selected')) {
        $(this).removeClass('secondary');
        $(this).addClass('primary');
    } else {
        $(this).removeClass('primary');
        $(this).addClass('secondary');
    }
});
