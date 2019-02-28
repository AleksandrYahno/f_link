'use strict';

console.log('check');

$(document).ready(function ($) {

    console.log(777);

    $('.single-item').slick({
        dots: true,
        // infinite: false,
    });

    // $(function () {
    //     $("#tabs").tabs();
    // });
    //
    // $("#topNavigation li a").click(function () {
    //     var e = $(this).parent().parent().find("a");
    //     for (var i = 0; i < e.length; i++) {
    //         e[i].setAttribute("class", " ");
    //     }
    //     $(this).addClass("active-navigation");
    // });
    //
    // $("#bottomNavigation li a").click(function () {
    //     var e = $(this).parent().parent().find("a");
    //     for (var i = 0; i < e.length; i++) {
    //         e[i].setAttribute("class", " ");
    //     }
    //     $(this).addClass("active-navigation");
    // });
    //
    // $( ".accordion" ).accordion({
    //     active: false,
    //     collapsible: true
    // });

});
