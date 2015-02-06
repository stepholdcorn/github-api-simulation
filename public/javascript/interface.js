$(document).ready(function() {
  loadProfile('stepholdcorn');

  $('#add_profile').on('submit', function(event) {
    event.preventDefault();
    console.log($('#username'));
    var newUser = $('#username').val();
    loadProfile(newUser);
  });
});

var loadProfile = function(newUser) {
  $.get('http://api.github.com/users/' + newUser, function(user) {
  var newProfile = Mustache.render($('#profile-template').html(), user);
  $('.profile-container').append(newProfile);
  });
}