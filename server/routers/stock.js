var express = require('express');
var StockMessageController = require('../../db/controllers/stockMessage.js');

var router = express.Router();

router.route('/')
  .post(function(req, res) {
    console.log('GET request to / sent');
    console.log('req.body =', req.body);
    // retrieve all messages from DB
    StockMessageController.findAll(req.body.symbol, function(err, messages) {
      if(err) {
        res.json(err);
      }
      res.json(messages);
    });

  });

module.exports = router;