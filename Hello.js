var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Node JS  World! india Rakesh jha From Chennai');
});

var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening on localhost:'+ port);
