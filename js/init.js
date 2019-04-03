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
});
// autoplay()
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
// }
