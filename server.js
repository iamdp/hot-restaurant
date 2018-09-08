//dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//------------------------------------------//
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*var array = [];
function Reserve(name, phoneNumber, email, uniqueId) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.uniqueId = uniqueId;
}*/

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
