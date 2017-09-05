$(document).ready(function(){

  $('#triangle-side').hover(function() {
    $(this).attr('src','imgs/back-active.png');
  }, function() {
    $(this).attr('src','imgs/back-to-home.png');
  });

  // scroll to nav item
  $('.nav_item').click(function(e) {
    e.preventDefault();
    var navId = $(this).data('scroll');
    $("html, body").animate({scrollTop: $(navId).offset().top }, 1000);
  });

  $('nav').hide();


var cardOne = $("#budget-app").offset().top - 50;
var cardTwo = $("#bolt").offset().top - 50;
var cardThree = $("#sustaining-good").offset().top - 50;
var cardFour = $("#branding").offset().top - 50;
var cardFive = $("#print").offset().top - 50;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > cardOne && scroll < cardTwo) {
        $(".nav_item").removeClass("nav-active");
        $('#number-nav').find('li:first-child').addClass("nav-active");
    }
    else if(scroll > cardTwo && scroll < cardThree) {
      $(".nav_item").removeClass("nav-active");
      $('#number-nav').find('li:nth-child(2)').addClass("nav-active");
    }
    else if(scroll > cardThree && scroll < cardFour) {
      $(".nav_item").removeClass("nav-active");
      $('#number-nav').find('li:nth-child(3)').addClass("nav-active");
    }
    else if(scroll > cardFour && scroll < cardFive) {
      $(".nav_item").removeClass("nav-active");
      $('#number-nav').find('li:nth-child(4)').addClass("nav-active");
    }
    else if(scroll > cardFive) {
      $(".nav_item").removeClass("nav-active");
      $('#number-nav').find('li:nth-child(5)').addClass("nav-active");
    }
    else {
        $(".nav_item").removeClass("nav-active");
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > window.innerHeight - 50) {
      $('nav').fadeIn();
    } else {
      $('nav').fadeOut();
    }
  });

  $(".nav_item").click(function(){
      $(".nav_item").removeClass("nav-active");
      $(this).addClass("nav-active");
  });

  $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
  });

  // below are the icon hover states
  $('#instagram-icon').hover(function() {
    $(this).attr('src','imgs/instagram-icon-active.jpg');
  }, function() {
    $(this).attr('src','imgs/instagram-icon.jpg');
  });

  $('#linkedin-icon').hover(function() {
    $(this).attr('src','imgs/linkedin-icon-active.jpg');
  }, function() {
    $(this).attr('src','imgs/linkedin-icon.jpg');
  });

  $('#dribbble-icon').hover(function() {
    $(this).attr('src','imgs/dribbble-icon-active.jpg');
  }, function() {
    $(this).attr('src','imgs/dribbble-icon.jpg');
  });

  $('#triangle').hover(function() {
    $(this).attr('src','imgs/back-to-top-active.png');
  }, function() {
    $(this).attr('src','imgs/back-to-top.png');
  });



});
