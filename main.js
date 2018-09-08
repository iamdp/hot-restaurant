$(document).ready(function() {
  queryURL = 'localhost:3000/api/reservation';
  $('.submit').click(function() {
    $.post(queryURL, function(data, status) {
      alert('Status: ' + status);
    });
  });
  $.ajax({
    queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
  });
});
