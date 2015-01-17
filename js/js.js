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
        clearInterval(intervalId);
            
    //    $('div.remodal-content').height(height);
    //    $('div.remodal-content').css('height', height + 'px');
        
        var $remodalContent = $('div.remodal-iframe div.remodal-content');
        var top = $remodalContent.scrollTop();
        $remodalContent.data('prev-scroll-top', top);
    //    alert(top);
        
        // iframe.height 最適化
        $html = $('html').css('overflow', 'hidden');
        $(this).css('height', 'auto');
        var height = $(this).height();
        if (height > 0) {
            $(this).height(height + 50);
            $html = $('html').css('overflow', '');
            $remodalContent.scrollTop(top);
            
            $('.unframe-btn').text('height: ' + height);    // for debug
        }
    });
}
