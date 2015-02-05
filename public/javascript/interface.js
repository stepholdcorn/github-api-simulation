$(document).ready(function() {
  $.get('http://api.github.com/users/stepholdcorn', function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
  });
});