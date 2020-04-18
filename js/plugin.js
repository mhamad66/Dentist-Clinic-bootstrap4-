 $(function(){
'use strict';
var winH = $(window).height();
var upperH = $('.upperBar').innerHeight();
var navH = $('.navbar').innerHeight();
$('.slider,.carousel-item').height(winH-(upperH + navH)+350);
    });

    
    const btnScrollDown = document.querySelector("#btnScrollDown");
    btnScrollDown.addEventListener("click",function(){
        window.scrollTo({
            top:50,
            left:0,
            behavior:'smooth'
        });
   
    });

    $(window).on('load', function () {
        $("body").css("overflow","auto");
        $(".lodaingOverlay").hide(1000);
    });