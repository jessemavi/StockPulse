var StockMessageModel = require('../models/stockMessage.js');

function insertOne(stock, callback) {
  StockMessageModel.create(stock, callback);
}

function findAll(symbol, callback) {
  console.log('StockMessageController findAll running');
  StockMessageModel.find({symbol: symbol}, callback);
}

exports.insertOne = insertOne;
exports.findAll = findAll;