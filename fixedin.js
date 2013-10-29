(function( $ ) {
    jQuery.fn.fixedin = function(offset) {
        var idFixedin = this.selector;
        var offsetTop = offset;
        function scrollPage() {
            var windowTop = $(window).scrollTop();
            var navItems = $(idFixedin).find("a");
            var page;
            var itemContentHeight;
            var windowHeight;
            for (var i= 0, size = navItems.length; i<size; i++) {
                var itemContent = navItems.eq(i).attr("href");
                page = $(itemContent).offset().top - offsetTop;
                if (i == navItems.length-1) {
                    itemContentHeight = $(itemContent).height();
                    windowHeight = $(window).height();
                    page = $(itemContent).offset().top - offsetTop - windowHeight + itemContentHeight;
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
        });

    };
})(jQuery);