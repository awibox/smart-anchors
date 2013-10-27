(function( $ ) {
    jQuery.fn.fixedin = function(offset) {
        var idFixedin = this.selector;
        var offsetTop = offset;
        function scrollPage() {
            var windowTop = $(window).scrollTop();
            var navItems = $(idFixedin).find("a");
            var page;
            for (var i= 0, size = navItems.length; i<size; i++) {
                var itemContent = navItems.eq(i).attr("href");
                page = $(itemContent).offset().top - offsetTop;
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
