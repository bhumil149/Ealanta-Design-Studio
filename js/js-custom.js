$(document).ready(function () {

  jQuery('.mobile-menu').click(function () {
    jQuery('.side-menu').toggleClass('side-menu-open');
    jQuery('body').toggleClass('side-menu-toggle');
  });

  jQuery('.side-close-icon').click(function () {
    jQuery('.side-menu').removeClass('side-menu-open');
  });


  $('.main-panel-sec').addClass('expand');

  $(".loading-imglogo").click(function () {

    $('.el-tilt').tilt().destroy;
    $('.loading-imglogo').removeAttr('style').removeClass('.el-tilt');

    setTimeout(function () {
      $(".loading-sec ul").addClass("show-text");
    }, 4000);

    setTimeout(function () {
      $(".loading-sec").addClass("open");
      $(".inner-page-nav").addClass("inner-page-nav-show");
      $('.loading-imglogo').removeAttr('style');
    }, 100);

  });
  AOS.init({
    once: true,
    easing: 'ease-in-out'
  });

});
$(document).ready(function () {
  $('.el-tilt').tilt();
});
$(document).ready(function () {
  $(".main-panel-m").click(function () {
    $(".main-panel-sec").addClass("show-tab");
  });
});
$(document).ready(function () {

  $(".main-panel-m a").click(function (e) {
    e.preventDefault();
  });

  $(".main-panel-m").click(function () {
    var tabid = $(this).find("a").attr("href");
    $(".main-panel-m,.main-page div.detail-sec").removeClass("active"); // removing active class from tab

    $(".detail-sec").hide(); // hiding open tab
    $(tabid).show(); // show tab
    $(this).addClass("active"); //  adding active class to clicked tab

  });
  // Search Wrapper
  $(".search-icon").click(function () {
    $("body").addClass("fixed");
    $(".search-wrapper").addClass("show");
  });
  $(".close-icon").click(function () {
    $("body").removeClass("fixed");
    $(".search-wrapper").removeClass("show");
  });
  $('.internship-images-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".inner-page-nav").addClass("fixed");
  } else {
    $(".inner-page-nav").removeClass("fixed");
  }
}); //missing );

$(document).ready(function(){

    $('.open-img-popup').click(function(){
        $('.popup-box').removeClass('active');
        $(this).closest('.search-pro-item').find('.popup-box').addClass('active');
        
        $('.popup-slider-top').resize();
        $('.popup-slider-bottom').resize();
    });

    $('.close-popup').click(function(){
        $(this).closest('.popup-box').removeClass('active');
    });

    $('.popup-slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.popup-slider-bottom',
    });

    $('.popup-slider-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        touchMove: true,
        asNavFor: '.popup-slider-top',
    });


    var imgs = $('.popup-slider-bottom img');
    imgs.each(function(){
        var item = $(this).closest('.popup-bottom-item');
        item.css({
            'background-image': 'url(' + $(this).attr('src') + ')', 
            'background-position': 'center',            
            '-webkit-background-size': 'cover',
            'background-size': 'cover', 
        });
        $(this).hide();
    });

});