(function( $ ) {
    jQuery.fn.interactiveMenu = function() {


        function a() {
            var interactiveMenu = $("#interactive-menu li a");
            var liLength = interactiveMenu.length;

            var windowTop = $(window).scrollTop();

            var a = [];


            for (var i=0; i<5; i++) {
                var b = $("#interactive-menu li a").eq(i).attr("href");
                console.log(b);
                a.push(b);

            }
            console.log(a);
            $("#interactive-menu li a").removeClass("active");

            var page = $('#page3').offset().top;
            if (windowTop > page) {

                $('a[href="#page3"]').addClass("active");
            }
        }
        $(function(){
            $(window).scroll(a);
        });
    };
})(jQuery);