var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = 3000;

app.use('/api', require('../routes/api')(express))

app.listen(port, function(){
  console.log('Server listening on port ' + port);
})
