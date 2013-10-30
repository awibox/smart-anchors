(function( $ ) {
    jQuery.fn.fixedin = function(speed) {
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
                if(itemOffset>offsetTop) {
                    page = $(itemContent).offset().top - itemOffset;
                    if(navItems.length-1 == i) {
                        page = $(itemContent).offset().top - offsetTop - itemOffset;
                    }
                } else {
                    page = $(itemContent).offset().top - offsetTop;
                }
                $(itemContent).css('min-height', windowHeight/1.5)
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
                b = $(this).attr("href");
                c = $(b).offset().top;
                $('html,body').animate ({scrollTop: c},speed)
            });
        });
    };
})(jQuery);