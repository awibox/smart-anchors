/*
 * SmartAnchors
 * http://github.com/awibox/SmartAnchors
 *
 * Author: Andrey Arkhipov
 * http://awibox.ru
 *
 * Licensed under the MIT license.
 *
 * $('nav_id').smartanchors(speed);
 */
(function($) {
    jQuery.fn.smartanchors = function(speed) {
        var idFixedin = this.selector;
        var offsetTop = 100;
        var page,
            itemContent,
            itemContentHeight,
            windowHeight,
            itemOffset,
            navItems,
            windowTop,
            i;
        function scrollPage() {
            windowTop = $(window).scrollTop();
            navItems = $(idFixedin).find("a");
            for (i= 0, size = navItems.length; i<size; i++) {
                itemContent = navItems.eq(i).attr("href");
                page = $(itemContent).offset().top - offsetTop;
                itemContentHeight = $(itemContent).height();
                windowHeight = $(window).height();
                itemOffset = windowHeight - itemContentHeight;

                if(itemOffset<offsetTop) {
                    page = $(itemContent).offset().top - itemOffset;
                } else {
                    page = $(itemContent).offset().top - offsetTop;
                }
                if(navItems.length-1 == i) {
                    page = $(itemContent).offset().top - offsetTop - itemOffset;
                    $(itemContent).css('min-height', windowHeight/1.5)
                }
                if(navItems.length-2 == i) {
                    $(itemContent).css('min-height', windowHeight/1.5)
                    console.log(windowHeight)
                }

                if (windowTop > page) {
                    navItems.removeClass("active");
                    navItems.eq(i).addClass("active");
                }
                console.log(windowTop);
                console.log(page);
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