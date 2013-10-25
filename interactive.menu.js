(function( $ ) {
    jQuery.fn.interactiveMenu = function() {
        function с() {
            var windowTop = $(window).scrollTop();
            var menuItems = $("#interactive-menu li a");
            var a = [], page;
            for (var i= 0, size = menuItems.length; i<size; i++) {
                var b = menuItems.eq(i).attr("href");
                a.push(b);
                page = $(b).offset().top;
                console.log(windowTop);
                console.log(page);
                if (windowTop > page) {
                    $(this).addClass("active");
                }
                console.log(b);
            }
            console.log(size);
            $("#interactive-menu li a").removeClass("active");



        }
        $(function(){
            $(window).scroll(с);
        });
    };
})(jQuery);