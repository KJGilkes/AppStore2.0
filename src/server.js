// Including the express package
const express = require('express');
// Including the body-parser package
const bodyparser = require('body-parser');
// Instantiating express
const app = express();
// Including my utility tool
const utility = require('kj_utility_tool');
// Setting the port
const port = process.env.PORT || 3000;


// Parsing the form data that comes in with the body parser package
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true,
}));

// The prefix to the index.js route
app.use('/', require('./routes/index')(express));

// Server function
const server = app.listen(port, () => {
  utility.debug('Server listening on port ' + port);
});

// Exporting server file contents
module.exports = server;
