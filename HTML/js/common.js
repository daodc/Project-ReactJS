$(document).ready(function() {
  $('.selectpicker,.select_search').selectpicker();
  //popup
  $("a.image_link[rel^='prettyPhoto']").prettyPhoto({
    autoplay_slideshow: false,
    slideshow:10000, 
    animationSpeed: 'normal',
    padding: 15, 
    opacity: 0.9, 
    showTitle: false, 
    allowresize: false,
    counter_separator_label: '/', 
    //theme: 'dark_square', /* light_rounded / dark_rounded / light_square / dark_square */
    hideflash: false,
    modal: false, 
    social_tools: '',
    deeplinking: false,
    default_width: 500,
    default_height: 344
  });
  //equal height
  var byRow = $('body');
  // apply matchHeight to each item container's items
  $('.gd-pofolio').each(function() {
    $(this).children('.item').children('.gd-place').matchHeight(byRow);
  });
  $('.wd-bt-tog-lct').click(function(){
    $('.wd-left-map').toggle("slow");
    $(this).toggleClass("wd-bt-tog-lct-tg");
  });
});
