/********************** Side mobile menu *********************/

 $(function() {
    // init zeynepjs side menu
    var zeynep = $('.zeynep').zeynep({
      opened: function () {
        // log
        console.log('the side menu opened')
      },
      closed: function () {
        // log
        console.log('the side menu closed')
      }
    })

    // dynamically bind 'closing' event
    zeynep.on('closing', function () {
      // log
      console.log('this event is dynamically binded')
    })

    // handle zeynepjs overlay click
    $('.zeynep-overlay').on('click', function () {
      zeynep.close()
    })

    // open zeynepjs side menu
    $('.open-side-menu').on('click', function () {
      zeynep.open()
    })
})




/********************** slick slider mobile menu *********************/


$(document).ready(function(){

  $('.rtl-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.rtl-slider-nav'
  });
  
  $('.rtl-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.rtl-slider',
    centerMode: false,
    focusOnSelect: true,
    prevArrow: ".thumb-prev",
    nextArrow: ".thumb-next",
  });

  $('.zoom').zoom();

});


/************************** Fancybox *******************************/

// Initialize Fancybox on the main slider
$('.zoom-img').on('click', function() {
  var images = $('.zoom');
  var currentIndex = images.index(this);

  $.fancybox.open(images, {
    thumbs: {
      autoStart: true,
      axis: 'y'
    },
    loop: true,
    index: currentIndex
  });

  return false;
});


/***********************  Owl Carousel ***************************/

$(function() {
  $('.owl-1').owlCarousel({
    nav: true,
    dots:true,
    margin: 0,
    stagePadding: 0,
    smartSpeed: 450,
    navText: ['<i class="bi bi-chevron-left owl-left-icon"></i>', '<i class="bi bi-chevron-right owl-right-icon"></i>'],
    responsiveClass: true,
    responsive: {
      0:{
        items: 1,
        loop: true,
      },
      680: {
        items: 2,
        loop: true,
      },
      1024: {
        items: 3,
        loop: true,
        margin: 0
      },
      1600: {
        items: 4,
        loop: false,
        margin: 0,
      }
    }
  });
});


/***********************  Wishlist Heart animation ***************************/

$(".button-heart").click(function() {
  $(this).toggleClass("animate");
  $(this).toggleClass("active");
});


$('.button-heart').on('click', function() {
  $('.owl-1').trigger('next.owl.carousel');
});


/*********************** Header Sticky ***********************/

var lastScrollTop = 0;
var isScrollingUp = false;

var isPageRefreshed = sessionStorage.getItem('isPageRefreshed');

if (isPageRefreshed) {
  sessionStorage.removeItem('isPageRefreshed');
} else {
  $(document).scrollTop(0);
}


$(window).scroll(function () {

  var scrollTop = $(this).scrollTop();

  if ($(window).scrollTop() === 0) {
    $(".header_sticky").removeClass("header_sticky-active");
    $(".product-content").css({"top":"0px"}); 
  }

  if (scrollTop > lastScrollTop) {
    if (isScrollingUp) {
      isScrollingUp = false;
      $(".header_sticky").removeClass("header_sticky-active");    
      $(".product-content").css({"top":"0px"}); 
    }
  } 
  else {
    if (!isScrollingUp) {
      isScrollingUp = true;
      $(".header_sticky").addClass("header_sticky-active"); 
      $(".product-content").css({"top":"200px"}); 
    }
  }

  lastScrollTop = scrollTop;

});


$(window).on('beforeunload', function () {
  sessionStorage.setItem('isPageRefreshed', 'true');
});

    // let $window = $(window);

    // $window.on('scroll', function () {
    //     if ($window.scrollTop() > 230) {
    //       $('.header').addClass('is-sticky');
    //     } else {
    //       $('.header').removeClass('is-sticky');
    //     }
    // });
  
    // $window.on('scroll', function () {
    //     if ($window.scrollTop() > 0) {
    //     $('.header').addClass('sticky-header');
    //     $('.top_bar').hide();
    //     } else {
    //     $('.header').removeClass('sticky-header');
        
    //     $('.top_bar').show();  
    //     }
    // });

    // $window.on('scroll', function () {
      
    //   if ($('.header').hasClass('is-sticky')){
    //     $(".product-content").css({"top":"200px"});
    //   }
    //   else{
    //     $(".product-content").css({"top":"0px"});

    //   }

    // });
    // $window.on('scroll', function () {
      
    //   if ($('.header').hasClass('is-sticky')){
    //     $(".product-content").css({"top":"200px"});
    //   }
    //   else{
    //     $(".product-content").css({"top":"0px"});
    //   }

    // });

/*********************** Header Sticky End ***********************/

var offset = 200;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
    } else {
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
})

