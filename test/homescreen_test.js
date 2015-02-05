describe('homepage', function() {

var host = 'http://localhost:9999/';

before(function() {
  casper.start(host);
});

  it('should show steph\'s profile', function() {
    casper.then(function() {
      expect('body').to.include.text('stepholdcorn');
    });
  });

});