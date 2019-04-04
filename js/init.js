document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'bottom',
     hoverEnabled: false
  });
});
$(document).ready(function(){
    $('.carousel').carousel({
    duration: 100
  });
  $('.head-btn').on('click',function(){
    console.log('works')
  });
  $('.hidden-nav > ul').hide();
  $('.menu').on('click',function(){
    console.log('works')
    $('.hidden-nav > ul').slideToggle();
  });
  $(window).scroll(function(){
    var a = $(window).scrollTop();
    if(a > 500){
      $('.navbar').css({'background-color': 'black', 'boxbox-shadow': '0px 4px 8px 0px rgba(0,0,0,0.2)'});
    }
    if(a < 300){
      $('.navbar').css({'background-color': 'transparent', 'boxbox-shadow': 'none'});
    }
  });
});
// autoplay()
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
// }
