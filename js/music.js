

$(function () {

  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '30%',
    slidesToShow: 1,
    prevArrow: '',
    nextArrow: '',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          arrows: false,
          centerMode: true,
          centerPadding: '8%',
          slidesToShow: 1
        }
      }]
  });
});
