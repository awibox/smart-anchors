jQuery.fn.interactiveMenu = function() {
    function a() {
        var windowTop = $(window).scrollTop();
        var page = $('#page1').offset().top;
        console.log(page);
        if (windowTop > page) {
            $("#interactive-menu li a").removeClass("active");
            $('a[href="#page1"]').addClass("active");
        }
    }
    $(function(){
        $(window).scroll(a);
    });
};