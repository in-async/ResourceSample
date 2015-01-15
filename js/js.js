/*
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
$('div.remodal-content').on('resize', function(e) {
    alert('resize');
})
*/
$('div.remodal-content iframe').on('load', function(e) {
    
//    $('div.remodal-content').height(height);
//    $('div.remodal-content').css('height', height + 'px');
    
    var top = $('div.remodal-iframe div.remodal-content').scrollTop();
    $('div.remodal-iframe div.remodal-content').data('prev-scroll-top', top);
//    alert(top);
    
    var prevHeight = $(this).height();
    $(this).css('height', 'auto');
    
    var height = $(this).height();
    if (height > 0) {
        if (height < 200) {
            // 元に戻す
            $(this).css('height', prevHeight + 'px');
        } else {
            $(this).css('height', (height + 50) + 'px');
        }
        $('div.remodal-iframe div.remodal-content').scrollTop(top);
        
        $('.unframe-btn').text('height: ' + height);
    }
});
/*
$('div.remodal-iframe div.remodal-content').on('scroll', function (e) {
    var prevTop = $(this).data('prev-scroll-top');
    if (typeof prevTop !== 'undefined') {
        alert(prevTop);
        $(this).scrollTop(prevTop);
        $(this).removeData('prev-scroll-top');
    }
});
*/
