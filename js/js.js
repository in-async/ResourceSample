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
        
        var $remodalContent = $('div.remodal-iframe div.remodal-content');
        var top = $remodalContent.scrollTop();
        //$remodalContent.data('prev-scroll-top', top);
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
            var setCount = 0;
            var intervalId = setInterval(function() {
                console.log('setScrollTop');
                $remodalContent.scrollTop(top);
                if (++setCount >= 6) {
                    clearInterval(intervalId);
                }
            }, 50);
        }
    });
}
