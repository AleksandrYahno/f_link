'use strict';

$(document).ready(function ($) {


    $('.slider').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
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

    $(".popUp").click(function () {
        $("#popUp_box").addClass("popUp-form-active");
    });
    $("#popUpClose").click(function () {
        $("#popUp_box").removeClass("popUp-form-active");
    });


});
