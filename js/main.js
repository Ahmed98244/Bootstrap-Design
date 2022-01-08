// niceScroll
$("body").niceScroll({
  cursorcolor: "#4b73c8",
  background: "#DDD",
  cursorwidth: "15px",
  cursorborderradius: "20px",
  cursoropacitymin: .4,
  
});

// slider 
$(function () {

  'use strict';

  // slider height 
  var windowHeight = $(window).height(),
      upperHeight = $('.upper-bar').innerHeight(),
      navHeight = $('.navbar').innerHeight();

  $('.slider, .carousel-item').height(windowHeight - (upperHeight + navHeight));


  // Navbar 
  $('.navbar-nav .nav-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  // Featured Work 
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');

    if($(this).data('class') === 'all') {
      $('.shuffle-image .col-md').css('opacity', 1)
    }
    else {
      $('.shuffle-image .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
});
