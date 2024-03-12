var screenWidth = window.innerWidth;
$(".carouselExperience").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') {
      $(this).find('.right.carousel-control').click();  // Find and click right arrow
    }
    if (direction == 'right') {
      $(this).find('.left.carousel-control').click();   // Find and click left arrow
    }

  },
  allowPageScroll:"vertical"
});
$(".carouselEducation").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') {
      $(this).find('.right.carousel-control').click();  // Find and click right arrow
    }
    if (direction == 'right') {
      $(this).find('.left.carousel-control').click();   // Find and click left arrow
    }

  },
  allowPageScroll:"vertical"
});

if (screenWidth>900){
  $("[display='mobile']").hide();
  $("[display='desktop']").show();
}else{
  $("[display='mobile']").show();
  $("[display='desktop']").hide();
}