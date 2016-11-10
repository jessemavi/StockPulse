// dependencies
var express = require('express');
var mongoose  = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var stockRouter = require('./routers/stock.js');

// mongoose.connect('mongodb://localhost/stockInfo');


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(stockRouter);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
