let aboutOffset=$('#About').offset().top;


$(window).scroll(function(){
let WScroll=$(window).scrollTop();
if (WScroll > aboutOffset){

$('#mainNav').css('backgroundColor', 'rgb(0,0,0)')

}
else{
    $('#mainNav').css('backgroundColor', 'transparent')  
}
//console.log(WScroll)
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        margin:10,
        loop:true,
        center:true,
        nav:true,
        dots:true
    });
  });


  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });