$(document).ready( function() {
    var navigation, button;
    
    navigation = $("#nav > ul");
    button = $("#respmenu");
    
    button.click( function(e) {
        e.preventDefault();
        navigation.slideToggle();
    });
    
    $(window).resize( function() {
        var width = $(window).width();
        if(width > 767) {
            navigation.removeAttr("style");
        }
    });
    
});