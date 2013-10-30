/*
 * SmartAnchors
 * http://github.com/awibox/SmartAnchors
 *
 * Author: Andrey Arkhipov
 * http://awibox.ru
 *
 * Licensed under the MIT license.
 *
 * $('nav_id').smartanchors(offset, speed);
 */
(function($) {
    jQuery.fn.smartanchors = function(speed) {
        var idAnchors = this.selector;
        var offsetTop = 100;
        var page,
            itemContent,
            itemContentHeight,
            windowHeight,
            itemOffset,
            navItems,
            windowTop;
        function scrollPage() {
            windowTop = $(window).scrollTop();
            navItems = $(idAnchors).find("a");
            for (var i= 0, size = navItems.length; i<size; i++) {
                itemContent = navItems.eq(i).attr("href");
                page = $(itemContent).offset().top - offsetTop;
                if(navItems.length-2 == i) {
                    $(itemContent).css('min-height', windowHeight/1.5)
                    console.log(windowHeight)
                }
                if(navItems.length-1 == i) {
                    itemContentHeight = $(itemContent).height();
                    windowHeight = $(window).height();
                    itemOffset = windowHeight - itemContentHeight;
                    page = $(itemContent).offset().top - offsetTop - itemOffset;
                    $(itemContent).css('min-height', windowHeight/1.5)
                }
                if (windowTop > page) {
                    navItems.removeClass("active");
                    navItems.eq(i).addClass("active");
                }
            }
        }
        $(function(){
            scrollPage();
            $(window).scroll(scrollPage);
            $(window).resize(scrollPage);
            navItems.click(function(){
                event.preventDefault();
                var itemBlock = $(this).attr("href");
                var itemBlockScroll = $(itemBlock).offset().top;
                $('html,body').animate ({scrollTop: itemBlockScroll},speed)
            });
        });
    };
})(jQuery);