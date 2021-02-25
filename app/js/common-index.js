jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $('.col-mnu').toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body, .top-close').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $('.col-mnu').removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });



  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });



/*  $('.wrapper').prepend('<span class="eye-3"></span>');


  $('.eye-3').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });*/


  $('div.lazy').lazy();


  $('img.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,  
  });





  $().fancybox({
    selector: '.recomm-list-img-w',    
    arrows: false,
    infobar: false,
    smallBtn: false,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });
/*

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
  */

  function fancySlick(fancyLink, sliderClass, oneSlideClass, dotsStatus) {
    var gallery1 = $(fancyLink);
    $(fancyLink).on('click', function(e) {
      e.preventDefault();  
      var totalSlides1 = +$(this).parents(sliderClass).slick("getSlick").slideCount,
      dataIndex1 = +$(this).parents(oneSlideClass).data('slick-index'),
      trueIndex1;
      switch(true){
        case (dataIndex1<0):
        trueIndex1 = totalSlides1+dataIndex1; break;
        case (dataIndex1>=totalSlides1):
        trueIndex1 = dataIndex1%totalSlides1; break;
        default: 
        trueIndex1 = dataIndex1;
      }    
      $.fancybox.open(gallery1,{}, trueIndex1);
      return false;
    });

    $(sliderClass).slick({
      slidesToShow: 1,
      arrows: false,
      dots: dotsStatus,
      dotsClass: 'completed-slde-dots',
      customPaging: function() {
        return ''
      }
    });
  }


  fancySlick('.completed-slder-1 .completed-slde-link', '.completed-slder-1', '.completed-slder-1 .completed-slde', true);
  fancySlick('.completed-slder-2 .completed-slde-link', '.completed-slder-2', '.completed-slder-2 .completed-slde', true);
  fancySlick('.completed-slder-3 .completed-slde-link', '.completed-slder-3', '.completed-slder-3 .completed-slde', true);
  fancySlick('.completed-slder-4 .completed-slde-link', '.completed-slder-4', '.completed-slder-4 .completed-slde', true);
  fancySlick('.completed-slder-5 .completed-slde-link', '.completed-slder-5', '.completed-slder-5 .completed-slde', true);
  fancySlick('.completed-slder-6 .completed-slde-link', '.completed-slder-6', '.completed-slder-6 .completed-slde', true);



/*  var gallery1 = $('.completed-slder-1 .completed-slde-link');
  $('.completed-slder-1 .completed-slde-link').on('click', function(e) {
    e.preventDefault();  
    var totalSlides1 = +$(this).parents('.completed-slder').slick("getSlick").slideCount,
    dataIndex1 = +$(this).parents('.completed-slde').data('slick-index'),
    trueIndex1;
    switch(true){
      case (dataIndex1<0):
      trueIndex1 = totalSlides1+dataIndex1; break;
      case (dataIndex1>=totalSlides1):
      trueIndex1 = dataIndex1%totalSlides1; break;
      default: 
      trueIndex1 = dataIndex1;
    }    
    $.fancybox.open(gallery1,{}, trueIndex1);
    return false;
  });

  $('.completed-slder-1').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'completed-slde-dots',
    customPaging: function() {
      return ''
    }
  });*/










/*  $('.completed-slder-2').slick({
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

  $('.completed-slder-4').slick({
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
  */

  function tabs(controlClass, ContentClass) {
    $(controlClass).find('.tabs_control_link').click(function (e) {
      e.preventDefault();

      var item = $(this).closest($(controlClass).find('.tabs_control_item')),
      contentItem = $(ContentClass).find('.tabs_content_item'),
      itemPosition = item.index();

      contentItem.eq(itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');
    });
  }

  tabs('.tabs-control-1', '.tabs_content-1');
  tabs('.tabs-control-2', '.tabs_content-2');



  
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
/*  setTimeout(function () {
},7000);*/



/*  $('.completed-items').on('swipe', function(event, slick, direction){
   if (direction == 'left') {    
    setTimeout(function () {
      tabs('.tabs-control-1', '.tabs_content-1');
      tabs('.tabs-control-2', '.tabs_content-2');
    }, 700);
  }
  else {
    tabs('.tabs-control-1', '.tabs_content-1');
    tabs('.tabs-control-2', '.tabs_content-2');
  }
});*/






$('.recomm-list').slick({
  slidesToShow: 3,
  arrows: true,
  dots: true,
  customPaging: function() {
    return ''
  },  
  responsive: [
  {
    breakpoint: 641,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 361,
    settings: {
      slidesToShow: 1
    }
  },
  ]
});


/*$('.recomm-list').slick({
  infinite: true,    
  slidesToShow: 3,
  speed: 500,
  dots: false, 
  arrows: true,    
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 24000,
  cssEase: 'ease-out',    
});*/












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



$('select').fancySelect();

}); //ready

