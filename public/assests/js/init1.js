document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
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
    if(a > 180){
      $('.navbar').css({'background-color': 'black', 'boxbox-shadow': '0px 4px 8px 0px rgba(0,0,0,0.2)'});
    }
    if(a < 180){
      $('.navbar').css({'background-color': 'transparent', 'boxbox-shadow': 'none'});
    }
  });
  $('.info').click(function(){
    $(window).load('./bin/about_us.html')
  });
});
//AIzaSyAR66kMcP3mI3frUS-gqs6MMYlkF0vu7kk map api code
// autoplay()
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
// }
