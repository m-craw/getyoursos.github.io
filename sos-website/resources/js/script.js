$(document).ready(function(){
    
    /* --- Sticky navigation ---*/
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');  
        }
    }, {
        offset: '550px'
    }); 
    
    /* --- Scroll on buttons ---*/
    $('.js-scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
     $('.js-scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 600);
    });
     
   
    /* --- Nav Scroll ---*/
    $('a[href*="#"]') 
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {

              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { 
                return false;
              } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
              };
            });
          }
        }
      });
    
    /* --- Scroll animations ---*/
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '55%'
    });   
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '55%'
    });   
    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '55%'
    });   
    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '55%'
    });
    
    /* --- Mobile nav ---*/
    
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i'); 
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
          
        }
 });
 
    $(window).resize(function() {
         var nav = $('.js-main-nav');
            if($(document).width()>783){nav.show()};
            console.log("test123");
    })
    
    
/* --- Hover Enlarge Image ---*/

var map = new GMaps({
  div: '.map',
  lat: 33.774265,
  lng: -118.10,
   zoom: 12
});

  map.addMarker({
  lat: 33.774265,
  lng: -118.2578127,
  title: 'SOS',
  infoWindow: {
  content: '<p>SOS headquaters</p>'
}
  
}); 
    
   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true
    });  
    
    
});



