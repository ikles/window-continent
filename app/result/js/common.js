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



  $('.wrapper').prepend('<span class="eye-3"></span>');


  $('.eye-3').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });


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
   responsive: [
  {
    breakpoint: 481,
    settings: {
      dots: true, 
      dotsClass: 'completed-slde-dots-2',
    }
  },
  ]   
});
/*  setTimeout(function () {
},7000);*/





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


$('.product-filter-w').each(function () {
  let link = $(this).find('.product-filter-row');
  let minus = $(this).find('.product-filter-item-1');
  let cont = $(this).find('.product-filter-cont');
  let all = $(this).find('.filter-check-all');
  let checkHide = $(this).find('.filter-check-hide');
  link.click(function (e) {
    e.preventDefault();
    cont.toggleClass('off');
    minus.toggleClass('off');
  });


  all.click(function (e) {
    e.preventDefault();
    checkHide.toggleClass('on');
  });

});

if ( $('#calc-height').length ) {
  $("#calc-height").slider({
    range: "min",
    value: 3000,
    min: 0,
    max: 13000,
    slide: function( event, ui ) {
      $( "#amount-height" ).val( ui.value );
    }
  });
  $( "#amount-height" ).val( $( "#calc-height" ).slider( "value" ));  
}





if ( $('#calc-width').length ) {
  $("#calc-width").slider({
    range: "min",
    value: 6000,
    min: 0,
    max: 13000,
    slide: function( event, ui ) {
      $( "#amount-width" ).val( ui.value );
    }
  });
  $( "#amount-width" ).val( $( "#calc-width" ).slider( "value" ));
}


if ( $('#slider-range').length ) {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000000,
    values: [ 250000, 769990 ],
    slide: function( event, ui ) {
      let one = ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      $( "#amount" ).val(one);
      let two = ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); 
      $( "#amount2" ).val(two);
    }
  });
}

$('.product-filter-open-link').click(function (e) {
//e.preventDefault();
//$('.filter-left').toggleClass('on');
$('.filter-left').slideToggle({
  duration: 500,
  easing: "swing"
});
$('.overlay').fadeToggle();
});

$('.fil-close').click(function (e) {
  e.preventDefault();
//$('.filter-left').removeClass('on');
$('.filter-left').slideUp({
  duration: 500,
  easing: "swing"
});
$('.overlay').fadeOut();
});

$('.overlay').click(function () {
  $(this).fadeOut();
  $('.pop, .filter-left').fadeOut();
});

fancySlick('.catalog-slider .catalog-slider-item-img-w', '.catalog-slider', '.catalog-slider .catalog-slider-item', true);

$('select').fancySelect();




if ( $('.options-products-slider-cont').length ) {
new Swiper('.options-products-slider-cont', {

  scrollbar: {
    el: '.swiper-scrollbar',
  //перетаскивать скролл мышью
  draggable: true
},
slidesPerView: 'auto',
//перетаскивание на пк
simulateTouch: true,
//чувствительность свайпа
touchRatio: 2,
//угол срабатывания свайпа
touchAngle: 45,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
},
breakpoints: {
 481: {
   slidesPerView: 'auto', 
   spaceBetween: 10,   
 },

 200: {   
   slidesPerView: 2, 
   spaceBetween: 8,
   loop: false,
 },
},

});
}


if ( $('.config-block-slider').length ) {
new Swiper('.config-block-slider', {

  scrollbar: {
    el: '.swiper-scrollbar',
  //перетаскивать скролл мышью
  draggable: true
},
slidesPerView: 'auto',
//перетаскивание на пк
simulateTouch: true,
//чувствительность свайпа
touchRatio: 2,
//угол срабатывания свайпа
touchAngle: 45,
navigation: {
  nextEl: '.swiper-button-next-2',
  prevEl: '.swiper-button-prev-2'
},
loop: true,
breakpoints: {
 992: {
   slidesPerView: 4, 
   spaceBetween: 10,
   loop: true,
 },
 768: {
   slidesPerView: 3, 
   spaceBetween: 10,
   loop: false,
 },
 200: {   
   slidesPerView: 2, 
   spaceBetween: 3,
   loop: false,
 },
},
});
}

if ( $('.table-compare-slider').length ) {
new Swiper('.table-compare-slider', {

  scrollbar: {
    el: '.swiper-scrollbar',
  //перетаскивать скролл мышью
  draggable: true
},
slidesPerView: 'auto',
//перетаскивание на пк
simulateTouch: true,
//чувствительность свайпа
touchRatio: 2,
//угол срабатывания свайпа
touchAngle: 45,
navigation: {
  nextEl: '.swiper-button-next-3',
  prevEl: '.swiper-button-prev-3'
},
loop: true,
breakpoints: {
 992: {
   slidesPerView: 4, 
   spaceBetween: 10,
   loop: true,
 },
 768: {
   slidesPerView: 3, 
   spaceBetween: 10,
   loop: false,
 },
 200: {   
   slidesPerView: 2, 
   spaceBetween: 3,
   loop: false,
 },
},
});
}


$('.options-products').each(function () {  
  let link = $(this).find('.options-products-top');
  let cont = $(this).find('.options-products-choice-w');
  let arrow = $(this).find('.options-products-arrow');
  let self = $(this);
  link.click(function (e) {
    e.preventDefault();
    arrow.toggleClass('off');
    cont.slideToggle({
      duration: 500,
      easing: "swing"
    });
  })
});



if (window.matchMedia("(max-width: 480px)").matches) {
  $('.completed-bot-price-link').each(function () {
    $(this).text('Подробнее');
  });
} else {
  $('.completed-bot-price-link').each(function () {
    $(this).text('Подробнее о проекте');
  });
}



}); //ready