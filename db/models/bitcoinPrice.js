var mongoose = require('mongoose');

var bitcoinPriceSchema = mongoose.Schema({
  code: String,
  rate: String,
  description: String
});

var BitcoinPriceModel = mongoose.model('BitcoinPrice', bitcoinPriceSchema);

module.exports = BitcoinPriceModel;