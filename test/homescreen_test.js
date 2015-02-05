describe('homepage', function() {

  it('should show steph\'s profile', function() {
    casper.then(function() {
      expect('body').to.include.text('stepholdcorn');
    });
  });

});