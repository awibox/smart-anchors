(function( $ ) {
    jQuery.fn.interactiveMenu = function() {
        function с() {
            var windowTop = $(window).scrollTop();
            var menuItems = $("#interactive-menu li a");
            var paddingTop = 100;
            var a = [];
            var page;
            for (var i= 0, size = menuItems.length; i<size; i++) {
                var b = menuItems.eq(i).attr("href");
                a.push(b);
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