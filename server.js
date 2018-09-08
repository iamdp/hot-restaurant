<<<<<<< HEAD
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
=======
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservation
// =============================================================
var reservation = [
  {
    reservName: "David",
    reservPhone: 111 - 222 - 3333,
    reservEmail: "david@gmail.com",
    reservDate: 2018 - 09 - 08,
    reservTime: 1700
  },
  {
    reservName: "Hayley",
    reservPhone: 111 - 222 - 3333,
    reservEmail: "hayley@gmail.com",
    reservDate: 2018 - 09 - 08,
    reservTime: 1700
  },
  {
    reservName: "Kyle",
    reservPhone: 111 - 222 - 3333,
    reservEmail: "kyle@gmail.com",
    reservDate: 2018 - 09 - 08,
    reservTime: 1700
  },
  {
    reservName: "Ale",
    reservPhone: 111 - 222 - 3333,
    reservEmail: "ale@gmail.com",
    reservDate: 2018 - 09 - 08,
    reservTime: 1700
  },

  {
    reservName: "Koro",
    reservPhone: 111 - 222 - 3333,
    reservEmail: "koro@gmail.com",
    reservDate: 2018 - 09 - 08,
    reservTime: 1700
  }
];
var waitlist = [
  {
    waitName: "A",
    waitPhone: 111 - 222 - 3333,
    waitEmail: "a@gmail.com",
    waitDate: 2018 - 09 - 08,
    waitTime: 1700
  },
  {
    waitName: "B",
    waitPhone: 111 - 222 - 3333,
    waitEmail: "b@gmail.com",
    waitTime: 1700,
    waitDate: 2018 - 09 - 08
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all reservation
app.get("/api/reservation", function(req, res) {
  return res.json(reservation);
});

// Displays a single reservation, or returns false
app.get("/api/reservation/:reservation", function(req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservation.length; i++) {
    if (chosen === reservation[i].reservName) {
      return res.json(reservation[i]);
    }
  }

  return res.json(false);
});

// Create New Reservation - takes in JSON input
app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user

  // This works because of our body-parser middleware
  var newreservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservation.routeName = newcharacter.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newreservation);

  reservation.push(newreservation);

  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
>>>>>>> b23e35a3736fe16aaa8079a2bd400162b94bf921
});
