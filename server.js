// dependencies
var express = require('express');
var mongoose  = require('mongoose');
var bodyParser = require('body-parser');
var app = express();


// mongoose ORM setup
mongoose.connect('mongodb://localhost/stockInfo');


// middleware
app.use(bodyParser.json());


app.listen(8000, function() {
  console.log('listening on port 8000');
});
