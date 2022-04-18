const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loop: 'true',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// swiper

$(document).ready(function(){


  $.getScript("slick-1.8.1/slick/slick.min.js",function(){
$('.bergur-pic-main').show();
$('.toasts-pic-main').hide();
$('.pizza-pic-main').hide();
$('.salads-pic-main').hide();
$('.drinks-pic-main').hide();
$('.desserts-pic-main').hide();
    $('.bergur-btn').on('click', function(){
    
      $('.bergur-pic-main').show();
      $('.toasts-pic-main').hide();
      $('.pizza-pic-main').hide();
      $('.salads-pic-main').hide();
      $('.drinks-pic-main').hide();
      $('.desserts-pic-main').hide();
      $(".bergur-pic-main")[0].slick.refresh();
  });

  $('.toasts-btn').on('click', function(){

      $('.toasts-pic-main').show();
      $('.bergur-pic-main').hide();
      $('.pizza-pic-main').hide();
      $('.salads-pic-main').hide();
      $('.drinks-pic-main').hide();
      $('.desserts-pic-main').hide();
      $(".toasts-pic-main")[0].slick.refresh();
  });

  $('.pizza-btn').on('click', function(){
 
      $('.pizza-pic-main').show();
      $('.bergur-pic-main').hide();
      $('.toasts-pic-main').hide();
      $('.salads-pic-main').hide();
      $('.drinks-pic-main').hide();
      $('.desserts-pic-main').hide();
      $(".pizza-pic-main")[0].slick.refresh();
  });
  $('.salads-btn').on('click', function(){
 
    $('.salads-pic-main').show();
    $('.bergur-pic-main').hide();
    $('.toasts-pic-main').hide();
    $('.pizza-pic-main').hide();
    $('.drinks-pic-main').hide();
    $('.desserts-pic-main').hide();
    $(".salads-pic-main")[0].slick.refresh();
});
$('.drinks-btn').on('click', function(){
 
  $('.drinks-pic-main').show();
  $('.bergur-pic-main').hide();
  $('.toasts-pic-main').hide();
  $('.pizza-pic-main').hide();
  $('.salads-pic-main').hide();
  $('.desserts-pic-main').hide();
  $(".drinks-pic-main")[0].slick.refresh();
});
$('.desserts-btn').on('click', function(){
 
  $('.desserts-pic-main').show();
  $('.bergur-pic-main').hide();
  $('.toasts-pic-main').hide();
  $('.pizza-pic-main').hide();
  $('.salads-pic-main').hide();
  $('.drinks-pic-main').hide();
  $(".desserts-pic-main")[0].slick.refresh();
});

$('#Burgers-resp').on('click', function(){
  
  $('.bergur-pic-main').slideToggle();
  $('.toasts-pic-main').slideUp();
  $('.pizza-pic-main').slideUp();
  $('.salads-pic-main').slideUp();
  $('.drinks-pic-main').slideUp();
  $('.desserts-pic-main').slideUp();
  $(".bergur-pic-main")[0].slick.refresh();
});

$('#Toasts-resp').on('click', function(){
 
  $('.toasts-pic-main').slideToggle();
  $('.bergur-pic-main').slideUp();
  $('.pizza-pic-main').slideUp();
  $('.salads-pic-main').slideUp();
  $('.drinks-pic-main').slideUp();
  $('.desserts-pic-main').slideUp();
  $(".toasts-pic-main")[0].slick.refresh();
});

$('#Pizza-resp').on('click', function(){
 
  $('.pizza-pic-main').slideToggle();
  $('.bergur-pic-main').slideUp();
  $('.toasts-pic-main').slideUp();
  $('.salads-pic-main').slideUp();
  $('.drinks-pic-main').slideUp();
  $('.desserts-pic-main').slideUp();
  $(".pizza-pic-main")[0].slick.refresh();
});

$('#Salads-resp').on('click', function(){
 
  $('.salads-pic-main').slideToggle();
  $('.bergur-pic-main').slideUp();
  $('.toasts-pic-main').slideUp();
  $('.pizza-pic-main').slideUp();
  $('.drinks-pic-main').slideUp();
  $('.desserts-pic-main').slideUp();
  $(".salads-pic-main")[0].slick.refresh();
});

$('#Drinks-resp').on('click', function(){
 
  $('.drinks-pic-main').slideToggle();
  $('.bergur-pic-main').slideUp();
  $('.toasts-pic-main').slideUp();
  $('.pizza-pic-main').slideUp();
  $('.salads-pic-main').slideUp();
  $('.desserts-pic-main').slideUp();
  $(".drinks-pic-main")[0].slick.refresh();
});

$('#Desserts-resp').on('click', function(){
 
  $('.desserts-pic-main').slideToggle();
  $('.bergur-pic-main').slideUp();
  $('.toasts-pic-main').slideUp();
  $('.pizza-pic-main').slideUp();
  $('.salads-pic-main').slideUp();
  $('.drinks-pic-main').slideUp();
  $(".desserts-pic-main")[0].slick.refresh();
});

  $('.bergur-pic-main').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows:true,
    prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
    nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }

      
    ]
  });
  $('.toasts-pic-main').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows:true,
    prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
    nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  })
  $('.pizza-pic-main').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      arrows:true,
      prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
      nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
  })

  $('.salads-pic-main').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows:true,
        prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
        nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
  });
  $('.drinks-pic-main').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows:true,
        prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
        nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
  })
  $('.desserts-pic-main').slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          arrows:true,
          prevArrow:'<i class="arrows-respon fas fa-arrow-circle-left arrows-prev"></i>',
          nextArrow:'<i class="arrows-respon fas fa-arrow-circle-right arrows-next"></i>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '00px',
                slidesToShow: 1
              }
            }
          ]
  })


  });

  //slick-resp
  

  // lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      "showImageNumberLabel": false,
      "positionFromTop":150
    })

});
