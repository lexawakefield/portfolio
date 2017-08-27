$(document).ready(function(){
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


});



//
// Scolling down needs to snap to the bottom of the next section.
//
