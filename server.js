var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.header('Access-Control-Allow-Origin', '*');
  response.json(new Date());
});

server.listen(9999, function(){
  console.log('server running, hurrah!');
});

module.exports = server;
