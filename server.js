var express = require('express');
var app = express();
var server = require('http').createServer(app);
var sleep = require('sleep');

app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/javascript', express.static(__dirname + '/public/javascript'));

app.get('/', function(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.render('index');
});

server.listen(9999, function(){
  console.log('server running, hurrah!');
});

module.exports = server;
