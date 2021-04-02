jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });



  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });

  $('.completed-nav .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.completed-nav .tabs_control_item'),
    contentItem = $('.completed-nav .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });





  $('.slider').slick({            
    infinite: true,    
    slidesToShow: 1,
    speed: 500,
    dots: true,
    customPaging: function(slick,index) {
      var targetImage = slick.$slides.eq(index).find('.slider-item').attr('data-title');
      return `
      <div class="slider-nav">
      <div class="slider-nav-txt-1">${index+1}</div>
      <div class="slider-nav-txt-2">${targetImage}</div>
      </div>
      `;    
    },
    dotsClass: 'slider-dots',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 24000,
    cssEase: 'ease-out',    
    responsive: [

    {
      breakpoint: 1381,
      settings: {
        slidesToShow: 5        
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });

  /*<li href="#" class="slider-nav active">
                <div class="slider-nav-txt-1">01</div>
                <div class="slider-nav-txt-2">Производство</div>
                </li>*/


  //$("#phone_1").mask("+7 (999) 999-99-99");



  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });





  //$('select').fancySelect();

}); //ready

