var isIOS = /iP(hone|od|ad)/.test(navigator.platform);
if (isIOS) {
    var prevIframeHeight = 10000;
    var intervalId = setInterval(function() {
        $iframe = $('div.remodal-content iframe')
        var iframeHeight = $iframe.height();
        if (iframeHeight > prevIframeHeight) {
            prevIframeHeight = iframeHeight + 10000;
            $iframe.height(prevIframeHeight);
        }
    }, 500);
    
    $('div.remodal-content iframe').on('load', function(e) {
        console.log('iframe.load');
        clearInterval(intervalId);
        
        function on_disable_touch(e) {
            console.log('on_disable_touch');
            e.preventDefault();
        }
            
        var $remodalContent = $('div.remodal-iframe div.remodal-content');
        var top = $remodalContent.scrollTop();
        //$remodalContent.data('prev-scroll-top', top);
        $(document).on('touchstart touchmove touchend', on_disable_touch)
        try {
            // iframe.height 最適化
            $(this).css('height', 'auto');
            
            var height = $(this).height();
            if (height > 0) {
                $(this).height(height + 50);
    
                $('.unframe-btn').text('height: ' + height);    // for debug
            }
        }
        finally {
            $remodalContent.scrollTop(top);
//            $(document).off('touchstart touchmove touchend', on_disable_touch)
        }
    });
}
