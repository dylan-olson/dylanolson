// doc ready 
$(document).ready(function() {

    // MAIN NAV FOR CARDS 
    $('.nav-item').click(function(e) {
        e.preventDefault();

        var navTo = $(this).attr('href');

        // reset active 
        $('.nav-item').removeClass('active');
        $('.card.active').removeClass('active');

        // toggleActive
        $(this).toggleClass('active');
        $(navTo).toggleClass('active');

        // Going to make this more advanced later on 
    });

}); // end doc ready 