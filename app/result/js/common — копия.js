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




/*  $().fancybox({
    selector: '.completed-slder-1 .completed-slde-link',    
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

/*  function fancySlick(fancyLink, sliderClass, oneSlideClass, dotsStatus) {
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
  }*/


/*fancySlick('.completed-slder-1 .completed-slde-link', '.completed-slder-1', '.completed-slder-1 .completed-slde', true);
fancySlick('.completed-slder-2 .completed-slde-link', '.completed-slder-2', '.completed-slder-2 .completed-slde', true);
fancySlick('.completed-slder-3 .completed-slde-link', '.completed-slder-3', '.completed-slder-3 .completed-slde', true);
fancySlick('.completed-slder-4 .completed-slde-link', '.completed-slder-4', '.completed-slder-4 .completed-slde', true);
fancySlick('.completed-slder-5 .completed-slde-link', '.completed-slder-5', '.completed-slder-5 .completed-slde', true);
fancySlick('.completed-slder-6 .completed-slde-link', '.completed-slder-6', '.completed-slder-6 .completed-slde', true);*/



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


  var gallery = $('.recomm-list-item a.recomm-list-img-w');
  $('.recomm-list-item a.recomm-list-img-w').on('click', function(e) {
    e.preventDefault();  
    var totalSlides = +$(this).parents('.recomm-list').slick("getSlick").slideCount,
    dataIndex = +$(this).parents('.recomm-list-item').data('slick-index'),
    trueIndex;
    switch(true){
      case (dataIndex<0):
      trueIndex = totalSlides+dataIndex; break;
      case (dataIndex>=totalSlides):
      trueIndex = dataIndex%totalSlides; break;
      default: 
      trueIndex = dataIndex;
    }    
    $.fancybox.open(gallery,{}, trueIndex);
    return false;
  });

  $('.recomm-list').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    customPaging: function() {
      return ''
    }
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

