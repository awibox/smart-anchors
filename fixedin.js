(function( $ ) {
    jQuery.fn.fixedin = function() {
        var idFixedin = this.selector;
        var offsetTop = 100;
        function scrollPage() {
            var windowTop = $(window).scrollTop();
            var page;
            var itemContentHeight;
            var windowHeight;
            var itemOffset;
            var navItems = $(idFixedin).find("a");
            for (var i= 0, size = navItems.length; i<size; i++) {
                var itemContent = navItems.eq(i).attr("href");
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
        });
    };
})(jQuery);