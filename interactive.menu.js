(function( $ ) {
    jQuery.fn.interactiveMenu = function(padding) {
        var d = this.selector;
        var paddingTop = padding;
        function с() {
            var windowTop = $(window).scrollTop();
            var menuItems = $(d).find("a");
            var page;
            for (var i= 0, size = menuItems.length; i<size; i++) {
                var b = menuItems.eq(i).attr("href");
                page = $(b).offset().top - paddingTop;
                if (windowTop > page) {
                    menuItems.removeClass("active");
                    menuItems.eq(i).addClass("active");
                }
                console.log(b);
            }
            console.log(size);
        }
        $(function(){
            $(window).scroll(с);
        });
    };
})(jQuery);