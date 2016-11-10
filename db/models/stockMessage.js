var mongoose = require('mongoose');

var stockMessageSchema = mongoose.Schema({
  company: String,
  symbol: String,
  date: Date,
  time: String,
  message: String
});

var StockMessageModel = mongoose.model('StockMessage', stockMessageSchema);

module.exports = StockMessageModel;