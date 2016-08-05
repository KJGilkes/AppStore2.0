//Including the express package
var express = require('express');
//Including the body-parser package
var bodyparser = require('body-parser');
//Instantiating express
var app = express();

//Setting the port
var port = 3000;

//The prefix to the app.js route
app.use('/api/v1', require('../routes/app')(express))
//The prefix to the user.js route
app.use('/api/v1', require('../routes/user')(express))

//Server function
var server = app.listen(port, function(){
  console.log('Server listening on port ' + port);
})

//Exporting server file contents
module.exports = server;
