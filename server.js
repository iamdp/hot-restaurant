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
//empty array for our reservations
var reservationList = [];
var waitingList = [];
var table = 5;
//reservion constructor
/*function Reserve(name, phoneNumber, email, uniqueId) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.uniqueId = uniqueId;
}*/
//=========================================================
//index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
//reservation page
app.get('/reservations', function(req, res) {
  res.sendFile(path.join(__dirname, 'reservations.html'));
});
//view table page
app.get('/view-table', function(req, res) {
  res.sendFile(path.join(__dirname, 'viewtable.html'));
});
//wait list page
app.get('/wait-list', function(req, res) {
  res.sendFile(path.join(__dirname, 'waitlist.html'));
  return res.json(waitingList);
});
//creating a new reservation
app.post('/make-reservations', function(req, res) {
  newReservation = req.body;
  console.log(newReservation);
  if (tables > 0) {
    reservationList.push(newReservation);
    res.join(newReservation);
    tables--;
  } else if (tables < 0) {
    waitingList.push(newReservation);
    res.join(newReservation);
  }
});

//===========================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
