$(document).ready(function() {

  var stars = [];
  var numStars = 400;

  for( var i = 0; i < numStars; i++ ) {
    let top     = (Math.random() * 100) + 1 + '%';
    let left    = (Math.random() * 100) + 1 + '%';
    let size    = (Math.random() * 3) + .1 + 'px';
    let opacity = Math.random();

    stars.push('<div class="star" style="top: '+ top +'; left: '+ left +'; width: '+ size +'; height: '+ size +'; opacity: '+ opacity +';"></div>');
  }

  $(".universe .bg-slant").append(stars);

});
