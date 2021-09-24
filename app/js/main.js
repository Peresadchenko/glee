$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title').on('click', function (){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.product-shop__filter-btn').on('click', function () {
    $('.product-shop__filters').slideToggle();
  });
  
  $('.product-detalis__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-detalis__top-item').removeClass('product-detalis__top-item--active');
    $(this).addClass('product-detalis__top-item--active');

    $('.product-detalis__box-item').removeClass('product-detalis__box-item--active');
    $($(this).attr('href')).addClass('product-detalis__box-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 650,
        settings:{
          draggable: true,
        }
      }
    ]
  });

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
  
  $('.product-detalis__content-num').styler();

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
    }
  });

  $(".star").rateYo({
    starWidth: "11px"
  });

  $(".star, .star-product, .product-detalis__content-star").rateYo({
    starWidth: "18px",
    spacing: "13px",
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

  $('.product-detalis__slider-inner').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
        },
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.product-detalis__arrow-l').click(function (event) {
    $('.product-detalis__slider-inner').slick("slickPrev");
  });
  $('.product-detalis__arrow-r').click(function (event) {
    $('.product-detalis__slider-inner').slick("slickNext");
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
  
});