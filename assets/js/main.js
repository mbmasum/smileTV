$(".style-slider").slick({
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    slidesToShow: 5,
    autoplay: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: true,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            prevArrow: '<i class="fas fa-chevron-left prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right next"></i>',
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
}) 


$(".video-slider").slick({
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  slidesToShow: 4,
  autoplay: true,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          vertical: false,
          prevArrow: '<i class="fas fa-chevron-left prev"></i>',
          nextArrow: '<i class="fas fa-chevron-right next"></i>',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
          prevArrow: '<i class="fas fa-chevron-left prev"></i>',
          nextArrow: '<i class="fas fa-chevron-right next"></i>',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          prevArrow: '<i class="fas fa-chevron-left prev"></i>',
          nextArrow: '<i class="fas fa-chevron-right next"></i>',
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
}) 

$( ".datepicker" ).datepicker({
  changeMonth: true,
  changeYear: true,
});

$(document).ready(function(){  
  
  
  $(window).on("scroll",function(){


    if($(window).scrollTop() > 200){
      $(".menu").addClass("fixed_top")
  }else{
      $(".menu").removeClass("fixed_top")
  }

    if($(window).scrollTop() > 400){
        $(".back-top-btn").fadeIn()
    }else{
        $(".back-top-btn").fadeOut()
    }
  })


  $(".back-top-btn").click(function(){
    $("html,body").animate({
      scrollTo: 0}, 800);

  });


});