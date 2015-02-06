$(document).ready(function() {
  $.get('http://api.github.com/users/stepholdcorn', function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
  });

  $('#add_profile').on('submit', function(event) {
    event.preventDefault();
    console.log($('#username'));
    var newUser = $('#username').val();
    $.get('http://api.github.com/users/' + newUser, function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
    });
  });
});