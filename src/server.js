var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = 3000;

app.use('/api/v1', require('../routes/app')(express))
app.use('/api/v1', require('../routes/user')(express))

var server = app.listen(port, function(){
  console.log('Server listening on port ' + port);
})

module.exports = server;
