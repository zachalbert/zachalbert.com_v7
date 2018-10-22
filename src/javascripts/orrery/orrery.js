$(document).ready(function() {
  let minScreenWidth="768";
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  /* Determine the universe state immediately on load… */
  init( w );

  /* …and everytime there's a screen resize. */
  $(window).resize( function() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    init( w );
  });

  /* Set the state of the universe player */
  function init( screenWidth ) {
    let wideEnough = screenWidth > minScreenWidth ? true : false;
    if( wideEnough ) {
      universePlay();
      $('.universe-controls').show();
    } else {
      universePause();
      $('.universe-controls').hide();
    }
  }

  // $('#toggle-pause').click( function(e) {
  //   e.preventDefault();
  //   if( $('.universe').hasClass('pause') ) {
  //     universePlay();
  //   } else {
  //     universePause();
  //   }
  // })

  $('#toggle-play').click( function(e) {
    e.preventDefault();
    if( $('.universe').hasClass('play') ) {
      universePause();
    } else {
      universePlay();
    }
  })

  $('#toggle-labels').click( function(e) {
    e.preventDefault();
    toggleLabels();
  })

  $('#toggle-pluto').click( function(e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $('.pluto').toggleClass('hidden');
  })

});

function universePlay() {
  $('.universe').removeClass('pause fast');
  $('.universe').addClass('play');

  // Change play button to a pause button
  $('#toggle-play').removeClass('play').addClass('pause active');
}

function universePause() {
  $('.universe').removeClass('play fast');
  $('.universe').addClass('pause');

  // Change pause button to a play button
  $('#toggle-play').removeClass('pause active').addClass('play');
}

function universeFast() {
  $('.universe').removeClass('pause');
  $('.universe').addClass('play fast');

  $('.universe-controls_player').removeClass('active');
  $('.control-fast').addClass('active');
}

function toggleLabels() {
  $('.universe').toggleClass('labels-on');

  $('#toggle-labels').toggleClass('active');
}
