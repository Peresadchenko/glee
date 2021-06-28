$(function(){

  $('.content-filte__btn').on('click', function () {
    $('.content-filte__btn').removeClass('content-filte__btn--active');
    $(this).addClass('content-filte__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
    $('.pagination').addClass('pagination--list');
  });

  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
    $('.pagination').removeClass('pagination--list');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.1,
    onStart: function (data) {  
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);      
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".star-product").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
  
});