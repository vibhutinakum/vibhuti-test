
$(document).ready(function (e) {
    $(".scroll-up").click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
     });
    var Swipes = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    $(".hamburgerlines").click(function () {
        $(this).toggleClass("active");
        $('body,html').toggleClass("menu-open");
    });
});
$(window).resize(function () {
    if ($(window).width() > 767) {
        $('body,html').removeClass("menu-open");
        $(".hamburgerlines").removeClass("active");
    }
});