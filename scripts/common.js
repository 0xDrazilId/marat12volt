$('#menu_mobile_icon').click(function() {
    $('#menu').css({
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
    $('#menu').css({
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
    // $('#menu').css({
    //     'right': '-450px'
    // });  /* РАЗОБРАТЬСЯ ЧТО ЗА ХУЙНЯ!!!!Ы */

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
});