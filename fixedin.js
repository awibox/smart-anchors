(function( $ ) {
    jQuery.fn.FixedIN = function(offset) {
        var idFixedIN = this.selector;
        var offsetTop = offset;
        function scrollPage() {
            var windowTop = $(window).scrollTop();
            var navItems = $(idFixedIN).find("a");
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
            $(window).scroll(scrollPage);
        });

    };
})(jQuery);
