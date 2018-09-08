$(document).ready(function() {

  var stars = [];
  var numStars = 600;

  for( var i = 0; i < numStars; i++ ) {
    let top     = (Math.random() * 100) + 1 + '%';
    let left    = (Math.random() * 100) + 1 + '%';
    let size    = (Math.random() * 4) + .5 + 'px';
    let opacity = (Math.random() * 0.25) + 0.55;

    stars.push('<div class="star" style="top: '+ top +'; left: '+ left +'; width: '+ size +'; height: '+ size +'; opacity: '+ opacity +';"></div>');
  }

  $(".starry-night .star-field").append(stars);

});
