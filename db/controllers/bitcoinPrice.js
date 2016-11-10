var BitcoinPriceModel = require('../models/bitcoinPrice.js');

function insertOne(currency, callback) {
  console.log('insert running');
  BitcoinPriceModel.create(currency, callback);
}

function findAll(callback) {
  console.log('findAll running');
  BitcoinPriceModel.find({}, callback);
}

exports.insertOne = insertOne;
exports.findAll = findAll;