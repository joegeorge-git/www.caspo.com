/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
﻿/// <reference path="jquery-1.11.3.min.js" />
        !function (t) {
            jQuery.scrollSpeed = function (e, n, o) {
                var i, l, r, u = t(document), h = t(window), a = t("html, body"), c = o || "default", d = 0, s = !1;
                return window.navigator.msPointerEnabled ? !1 : void h.on("mousewheel DOMMouseScroll", function (t) {
                    var o = t.originalEvent.wheelDeltaY, f = t.originalEvent.detail;
                    return i = u.height() > h.height(), l = u.width() > h.width(), s = !0, i && (r = h.height(), (0 > o || f > 0) && (d = d + r >= u.height() ? d : d += e), (o > 0 || 0 > f) && (d = 0 >= d ? 0 : d -= e), a.stop().animate({scrollTop: d}, n, c, function () {
                        s = !1
                    })), l && (r = h.width(), (0 > o || f > 0) && (d = d + r >= u.width() ? d : d += e), (o > 0 || 0 > f) && (d = 0 >= d ? 0 : d -= e), a.stop().animate({scrollLeft: d}, n, c, function () {
                        s = !1
                    })), !1
                }).on("scroll", function () {
                    i && !s && (d = h.scrollTop()), l && !s && (d = h.scrollLeft())
                }).on("resize", function () {
                    i && !s && (r = h.height()), l && !s && (r = h.width())
                })
            }, jQuery.easing["default"] = function (t, e, n, o, i) {
                return-o * ((e = e / i - 1) * e * e * e - 1) + n
            }
        }(jQuery);
var vw = $(window).width();
var vh = $(window).height();

$(document).ready(function () {
    $('.screen-height').css('height', vh);
    $('.margin-top-30').css('margin-top', vh * .35);
    jQuery.scrollSpeed(150, 800);
});

$(window).scroll(function () {
    $(".onscrollfadeout").css("opacity", 1 - $(window).scrollTop() / 400);
    $(".main-center-title h1").css({
        bottom: -$(window).scrollTop() / 4,
    });
    $(".main-center-title h4").css({
        bottom: -$(window).scrollTop() / 4,
    });

    $(".btn-subscribe").css({
        bottom: -$(window).scrollTop() / 4,
    });
    //console.log($(window).scrollTop());

});
