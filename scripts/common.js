$('#menu_mobile_icon').click(function() {
    $('#menu_mobile').css({
        'right': '0'
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
        'right': '-450px'
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
         'right': '-450px'
    });

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
});