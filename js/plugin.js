 $(function(){
'use strict';
var winH = $(window).height();
var upperH = $('.upperBar').innerHeight();
var navH = $('.navbar').innerHeight();
$('.slider,.carousel-item').height(winH-(upperH + navH)+350);
    });

    