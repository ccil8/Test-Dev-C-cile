const express = require('express');
const router = express.Router();
const request = require('request'); 


request('http://localhost:8080/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });  


request.post({url:'http://localhost:8080/'}, function optionalCallback(err, httpResponse, body) {
if (err) {
    return console.log('upload failed:', err);
  }
  console.log('Upload successful!');
});

module.exports = router;
