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



  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });





  $('.completed-slder-1').slick({
    infinite: true,    
    slidesToShow: 1,
    speed: 500,
    dots: true, 
    arrows: false,   
    dotsClass: 'completed-slde-dots',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 24000,
    cssEase: 'ease-out',    
  });

  $('.completed-slder-2').slick({
    infinite: true,    
    slidesToShow: 1,
    speed: 500,
    dots: true, 
    arrows: false,   
    dotsClass: 'completed-slde-dots',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 24000,
    cssEase: 'ease-out',    
  });

  $('.completed-slder-3').slick({
    infinite: true,    
    slidesToShow: 1,
    speed: 500,
    dots: true, 
    arrows: false,   
    dotsClass: 'completed-slde-dots',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 24000,
    cssEase: 'ease-out',    
  });

  $('.completed-items').slick({
    infinite: true,    
    slidesToShow: 1,
    speed: 500,
    dots: false, 
    arrows: true,    
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 24000,
    cssEase: 'ease-out',    
  });



  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: false,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
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
    }
    ]
  });



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

