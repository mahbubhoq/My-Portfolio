$(document).ready(function () {

  //SLICK SLIDER
    $('.review_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
    {
      breakpoint: 5000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
            {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
            {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //MIXITUP 
    //MIXITUP 
    
   // var container = document.querySelector('.gallery');
  //  var mixer = mixitup(container,{
  //     selectors: {
  //         control: '[our-mixitup-control]'
  //     } 
  //  });
    
    //WOW Animatition
   // new WOW().init();
    
    //Nav-bar Siblings add/remove active Class
    
    $('.navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //SMOOTH SCROOL FOR IE/EDGE/SAFARI
    
  $('.top').click(function(){
      $("html, body").animate({
          scrollTop:0
      },1000);
      
  });
  
    $(window).scroll(function(){
        var ourWindow = $(this).scrollTop();
        
        if(ourWindow<200){
            $('.top').fadeOut();
        } else{
            $('.top').fadeIn();
        }
        
        //Menu Fixed
        
        if(ourWindow>100){
            $('.header_area').addClass('fixed');
        } else{
            $('.header_area').removeClass('fixed');
        }
    });
    
    //SMOOTH SCROLL NAVBAR-MENU FOR IE/EDGE/SAFARI
    
   
  
    $('.navbar-nav a[href*="#"]').click(function(e){
        e.preventDefault();
        
        var target = this.hash;
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
    
});


//function openNav(){
//  document.getElementById("maynav").style.width ="100%";

//}
//function closeNav(){
//  document.getElementById("maynav").style.width ="0%";

//}
