$('#menu_mobile_icon').click(function() {
    $('#menu_mobile').css({
        'display': 'block'
    });

    $('#menu_mobile_icon').css({
        'display': 'none'
    });

    $('#menu_mobile_cross').css({
        'display': 'block'
    });
});

$('#menu_mobile_cross').click(function() {
    $('#menu_mobile').css({
        'display': 'none'
    });

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
});

$('.menu_item').click(function() {
    $('#menu_mobile').css({
        'display': 'none'
    });

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
});

/* GOVNOCODE INDUS STARTER PACK */

$('#screen__container--button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('#reverseCall_BUTTON').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('.card_button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('.card2_button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('#close_form').click(function() {
    $('#screen_form').css({
         'display': 'none'
    });
});