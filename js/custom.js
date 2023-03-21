
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });

//preloader
  (function ($) {
    'use strict';
  
    var alime_window = $(window);
  
    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************
  
    alime_window.on('load', function () {
      $('#preloader').fadeOut('1000', function () {
          $(this).remove();
      });
  });
  })(jQuery);

 document.getElementById("Fill").addEventListener("focusin",function(){
  document.getElementsByClassName("display")[0].classList.add("active")
 });
 document.getElementById("Fill").addEventListener("focusout",function(){
  document.getElementsByClassName("display")[0].classList.remove("active")
 });


 function EnableDisable(Fill) {
  //Reference the Button.
  var btn = document.getElementById("_btn");

  //Verify the TextBox value.
  if (Fill.value.trim() != "") {
      btn.disabled = false;
  } else {
      //Disable the TextBox when TextBox is empty.
      btn.disabled = true;
  }
};

function getDuration(){
    
  var m;
  var time;
  var s;
  var v = document.getElementById("main-video");
  var d = document.getElementById("custom");
  time= Math.floor(v.duration);
  m= Math.floor(time/60);
  
  s= Math.floor(time - (m*60));
  if(s < 10){
    d.innerHTML =m+"min"+" "+"0"+s+"sec";
  }else{
  //  d.innerHTML = Math.floor(m)+"min"+" "+Math.floor(s)+"sec";
    d.innerHTML= m+"min"+" "+ s+"sec";
  }
};

$( document ).ready(function () {
  $(".moreBox").slice(0, 5).show();
  if ($(".blogBox:hidden").length != 0) {
    $("#loadMore").show();
    $("#loadLess").hide();
  }else{
     $("#loadMore").show();
  }		
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 6).slideDown();
    if ($(".moreBox:hidden").length == 0) {
     $("#loadLess").show();
     $("#loadMore").hide();
    }
  });

 //  $("#loadLess").on('click', function (e) {
 //    e.preventDefault();
 //    if ($(".moreBox:hidden").length == 0) {
 //     $(".moreBox").slice(0, 3).slideToggle;
 //     $("#loadMore").show();
 //     $("#loadLess").hide();
 //    }
   
 //  });

});







