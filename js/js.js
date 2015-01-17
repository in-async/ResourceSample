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
var isIOS = /iP(hone|od|ad)/.test(navigator.platform);
if (isIOS) {
    var prevIframeHeight = 10000;
    var intervalId = setInterval(function() {
        console.log(intervalId);
        $iframe = $('div.remodal-content iframe')
        var iframeHeight = $iframe.height();
        if (iframeHeight > prevIframeHeight) {
            prevIframeHeight = iframeHeight + 10000;
            $iframe.height(prevIframeHeight);
        }
    }, 500);
    
    $('div.remodal-content iframe').on('load', function(e) {
        clearInterval(intervalId);
            
    //    $('div.remodal-content').height(height);
    //    $('div.remodal-content').css('height', height + 'px');
        
        var $remodalContent = $('div.remodal-iframe div.remodal-content');
        var top = $remodalContent.scrollTop();
        $remodalContent.data('prev-scroll-top', top);
    //    alert(top);
        
        $(this).css('height', 'auto');
        
        var height = $(this).height();
        if (height > 0) {
            if (height < 200) {
                // 元に戻す
                $(this).css('height', '');
            } else {
                $(this).css('height', (height + 50) + 'px');
            }
            $remodalContent.scrollTop(top);
            
            $('.unframe-btn').text('height: ' + height);    // for debug
        }
    });
}
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
