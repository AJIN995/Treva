$(document).ready(function() {
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        lazyLoad: true,
        once: true, // whether animation should happen only once - while scrolling down
    });
})

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav-thumbnails',
    autoPlay: false,
    infinite: false,
});

$('.slider-nav-thumbnails').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    focusOnSelect: true,
    autoPlay: false,
    infinite: false,
});

// Remove active class from all thumbnail slides
$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

// Set active class to first thumbnail slides
$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

$('.hamburger').click(function() {
    $('body').addClass('overlayIn');
    $('.pageNavList').addClass('pageNavList--active')
})

$('.navOut').click(function() {
    $('body').removeClass('overlayIn');
    $('.pageNavList').removeClass('pageNavList--active')
})