$(function(){
    // BACK -TO-TOP
    
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();

        if(scrolling>300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling>100){
            $('.navbar').addClass('bg') 
            }
            else{
                $('.navbar').removeClass('bg')
            }
    })
      // one page nav
  
      $('#nav2583').onePageNav();

    //  banner part
    $('.slider-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      fade:true,
      speed:2000,
      arrows:true,
      nextArrow: '.left-arrow',
      prevArrow: '.right-arrow',
    });


    // counter up part start js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // counter up part end js
    // video pup up start
    $('.venobox').venobox();
     // video pup up start

     // venobox
     $('.venobox').venobox();

    //  portfolio part
     $('.port-main').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,
              autoplaySpeed: 2000,  
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      // test part
      $('.test-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img'
      });
      $('.test-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.test-area',
        dots: false,
        centerMode: true,
        centerPadding:false,
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
        vertical:true
      });

      // company part

      $('.company-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        centerPadding:false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      // counter up
      $('.counter1').counterUp({
        delay: 10,
        time: 2000
    });

    // service part
    $('.service-full').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      vertical:true,
      arrows:true,
      centerMode: true,
      centerPadding:false,
      nextArrow: '<span class="slick-next2"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
        prevArrow: '<span class="slick-prev2"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
    });
});