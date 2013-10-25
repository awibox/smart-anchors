(function( $ ) {
    jQuery.fn.interactiveMenu = function() {
        var d = $(this);
        var paddingTop = 100;
        console.log(d);
        function с() {
            var windowTop = $(window).scrollTop();
            var menuItems = $("#interactive-menu li a");
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