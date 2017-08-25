$(document).ready(function(){
  // scroll to nav item
  $('.nav_item').click(function(e) {
    e.preventDefault();
    var navId = $(this).data('scroll');
    $("html, body").animate({scrollTop: $(navId).offset().top }, 1000);
  });

  $('nav').hide();

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > window.innerHeight) {
      $('nav').fadeIn();
    } else {
      $('nav').fadeOut();
    }
  });


  // window.scrollTo(0, window.innerHeight);



  // if section top = window top show nav

});



//
// Step 2: Scolling down needs to snap to the bottom of the next section.
//
// Step 3: The navigation needs to follow the user as the page scrolls vertically
//
// each section corresponds with a number in the navigation that should have an active state when the user is on the corresponding section
//
