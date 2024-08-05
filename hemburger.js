$(function() {
    // 初期状態でメニューを非表示に設定
    $('.gnavi__sp-style').css({
        'display': 'none',
        'visibility': 'hidden',
        'opacity': '0'
    });

    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.gnavi__sp-style').css({
                'display': 'flex',
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $('.gnavi__sp-style').css({
                'display': 'none',
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    });

    $(document).on('click', function(event) {
        if ($('.gnavi__sp-style').css('display') !== 'none' && !$(event.target).closest('.menu-btn, .gnavi__sp-style').length) {
            console.log("Clicked outside menu");
            $('.menu-btn').removeClass('active');
            $('.gnavi__sp-style').css({
                'display': 'none',
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    });
});
