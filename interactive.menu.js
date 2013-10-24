jQuery.fn.interactiveMenu = function() {
    function a() {
        var windowTop = $(window).scrollTop();
        var page = $('#content').offset().top;
        if (windowTop > page) {
            $("#navigation li a").removeClass("active");
            $('a[href="#page"]').addClass("active");
        }
    }
    $(function(){
        $(window).scroll(a);
    });
};