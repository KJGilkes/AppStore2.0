//Including the express package
const express = require('express');
//Including the body-parser package
const bodyparser = require('body-parser');
//Instantiating express
const app = express();

//Setting the port
const port = process.env.PORT || 3000;

//Parsing the form data that comes in with the body parser package
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true,
}));

//The prefix to the index.js route
app.use('/', require('./routes/index')(express))

//Server function
exports.server = app.listen(port, function(){
  console.log('Server listening on port ' + port);
});