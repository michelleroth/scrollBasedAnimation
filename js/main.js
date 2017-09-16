$(document).ready(function() {

    var $animation_elements = $('.img');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        console.log(window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var delayValue = 0;

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $(".img").each(function() {
                    $(this).delay(delayValue).animate({
                        "opacity": 1.0
                    });
                    delayValue += 300;
                }); // each method
            }
        });
    }

    $window.on('scroll', check_if_in_view);

    // init Masonry
    var $grid = $('.row').masonry({
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.img',
        percentPosition: true
    });

}); // ready method end