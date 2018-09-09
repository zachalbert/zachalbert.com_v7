$(document).ready(function() {

  /* Behavior onLoad */
  universePlay();

  $('#toggle-pause').click( function(e) {
    e.preventDefault();
    universePause();
  })

  $('#toggle-play').click( function(e) {
    e.preventDefault();
    universePlay();
  })

  $('#toggle-fast').click( function(e) {
    e.preventDefault();
    universeFast();
  })

  $('#toggle-labels').click( function(e) {
    e.preventDefault();
    toggleLabels();
  })

  $('#toggle-pluto').click( function(e) {
    e.preventDefault();
    togglePluto();
  })

  function universePlay() {
    $('.universe').removeClass('pause fast');
    $('.universe').addClass('play');

    $('.universe-controls_player').removeClass('active');
    $('.control-play').addClass('active');
  }

  function universePause() {
    $('.universe').removeClass('play fast');
    $('.universe').addClass('pause');

    $('.universe-controls_player').removeClass('active');
    $('.control-pause').addClass('active');
  }

  function universeFast() {
    $('.universe').removeClass('pause');
    $('.universe').addClass('play fast');

    $('.universe-controls_player').removeClass('active');
    $('.control-fast').addClass('active');
  }

  function toggleLabels() {
    $('.universe').toggleClass('labels-on');

    $('.control-labels').toggleClass('active');
  }

  function togglePluto() {
    $('.pluto').toggle();
  }

});
