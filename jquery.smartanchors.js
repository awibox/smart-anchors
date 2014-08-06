/*
 * SmartAnchors
 * http://github.com/awibox/SmartAnchors
 *
 * Author: Andrey Arkhipov
 * http://awibox.ru
 *
 * Licensed under the MIT license.
 *
 * $('nav_id').smartanchors(speed, addFixed, pagePadding);
 * speed - скорость прокрутки
 * addFixed - высота фиксирования (0 если всегда фиксируется)
 * pagePadding - высота шапки сверху, если она фиксированная
 */
(function($) {
    jQuery.fn.smartanchors = function(speed, addFixed, pagePadding) {
        var me = this,
            scrollPage = function() {
                var navItems = $(me).find('.b-smart-anchors__navi-item-link'),
                    windowHeight = $(window).height(),
                    offsetTop = 100+pagePadding,
                    windowTop = $(window).scrollTop();


                if(addFixed !== 0) {
                    $(me).removeClass("b-smart-anchors__navi_fixed");
                    if(windowTop>addFixed) {
                        $(me).addClass("b-smart-anchors__navi_fixed");
                    }
                }
                navItems.each(function(i){
                    var content = $($(this).attr("href"));
                    var page = content.offset().top - offsetTop;
                    if(navItems.length-2 == i) {
                        content.css('min-height', windowHeight/1.5);
                    }
                    if(navItems.length-1 == i) {
                        page = content.offset().top - offsetTop - windowHeight + content.height();
                        content.css('min-height', windowHeight/1.5)
                    }
                    if (windowTop > page) {
                        navItems.removeClass("b-smart-anchors__navi-item-link_active");
                        $(this).addClass("b-smart-anchors__navi-item-link_active");
                    }
                });
            };

        scrollPage();
        $(window).scroll(scrollPage);
        $(window).resize(scrollPage);
        $(this).find('a').click(function(ev){
            var hash = $(this).attr("href");
            $('html,body').animate({scrollTop: $(hash).offset().top-pagePadding},speed);
            return false;
        });
    };
})(jQuery);
