$('div.remodal-content').eq(1)
.scroll(function (e) {
    var top = $(this).scrollTop();
//    $('.unframe-btn').text(top);
    
    var prevTop = $(this).data('prevScrollTop');
    if (typeof prevTop === 'undefined') {
        $(this).data('prevScrollTop', top);
        return;
    }

    if (prevTop > 100 && top == 0) {
        $(this).scrollTop(prevTop);
    } else {
        $(this).data('prevScrollTop', top);
    }
})
;
//$('div.remodal-content iframe, document, window')
$('document, window, body')
.on('touchmove, touchstart, touchend', function (e) {
//    alert('touchmove');
    var top = $(this).scrollTop();
    $('.unframe-btn').text('touchmove: ' + top);
})
;
$('div.remodal-content iframe').on('resize', function(e) {
    alert('resize');
})
