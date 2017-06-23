var mongoose  = require('mongoose');
var request = require('request');
var stockMessageController = require('./db/controllers/stockMessage');
// var bitcoinPriceController = require('./db/controllers/bitcoinPrice');
var stockList = require('./stockList');

mongoose.connect('mongodb://localhost/stockInfo');

// function to add stock data to the DB
var getStockPriceData = function(stockList) {
  // delete messages from DB
  mongoose.connection.collections['stockmessages'].drop(function(err) {
    if(err) {
      console.log(err);
    }
  });

  // iterate over all dow30 stocks
  stockList.forEach(function(stockSymbol) {
    // make a get request for each company's messages
    var url = 'https://api.stocktwits.com/api/2/streams/symbol/' + stockSymbol + '.json';
    request.get(url, function(err, response, body) {
      var stockMessages = JSON.parse(body);
      if(err) {
        console.log(err);
      }
      // console.log(stockMessages);
      var company = stockMessages.symbol.title;
      var symbol = stockMessages.symbol.symbol;

      // iterate over the messages
      stockMessages.messages.forEach(function(message) {
        var date = message.created_at.slice(0, 10);
        var time = message.created_at.slice(11, 16);
        var messageText = message.body;
        // console.log(date, time, message);
        // console.log(company, symbol);
        stockMessageController.insertOne({company: company, symbol: symbol, date: date, time: time, message: messageText}, function(err, message) {
          if(err) {
            console.log(err);
          }
          console.log('message successfully inserted into DB');
        });
      });
    });
  });
};

getStockPriceData(stockList);

