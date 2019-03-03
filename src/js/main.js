'use strict';

$(document).ready(function ($) {


    $('.single-item').slick({
        dots: true,
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


});
