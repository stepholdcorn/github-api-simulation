$(document).ready(function() {
  $.get('http://api.github.com/users/stepholdcorn', function(user) {
    alert(user.login);
  })
});