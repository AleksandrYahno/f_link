'use strict';

$(document).ready(function ($) {


    $('.slider').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $(".leng a").click(function () {
        var a = $(this).parent().parent().find("a");
        for(var i = 0; i < a.length; i++) {
            a[i].setAttribute("class", "");
        }
        $(this).addClass("active-btn");
    });

    $(".currency a").click(function () {
        var a = $(this).parent().parent().find("a");
        for(var i = 0; i < a.length; i++) {
            a[i].setAttribute("class", "");
        }
        $(this).addClass("active-btn");
    });

    $(".main-menu-list a").click(function () {
        var a = $(this).parent().parent().find("a");
        for(var i = 0; i < a.length; i++) {
            a[i].setAttribute("class", "");
        }
        $(this).addClass("active-btn");
    });


});
