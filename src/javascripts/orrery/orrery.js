$(document).ready(function() {

  $(".universe").toggleClass('play');
  $("#playToggle").toggleClass('active');

  $("#playToggle").click( function(e) {
    e.preventDefault();
    $(".universe").toggleClass('play');
    $(this).toggleClass('active');
  });

  $('#labelToggle').click( function(e) {
    e.preventDefault();
    $('.universe').toggleClass('labels-on');
    $(this).toggleClass('active');
  });

  $('#plutoToggle').click( function(e) {
    e.preventDefault();
    $('.pluto').toggle();
    $(this).toggleClass('active');
  });

});
