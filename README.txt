-Focus on getting one piece right

App overview:

Home Page
- displays S&P500 index price and bitcoin price
- search box to enter in a symbol and a submit button

Stock page
- displays search box to enter in a symbol
- displays most recent days stock information
[
  "Date",
  "Open",
  "High",
  "Low",
  "Close",
  "Volume",
  "Adjusted Close"
]
-displays 30 most recent StockTwits messages
  -date
  -name
  -message



Store data in database
function that does the following once every 24 hours
-clears the db 
-makes requests for the following info and stores in db in seperate collections
  - S&P 500 index value and bitcoin price
  - stock information for each of the stocks in the S&P 500
  - last 30 messages for each of the stocks in the S&P 500

-Iterate over S&P500 list
-GET request for each stock
-Insert returned values in db

Stock Price Model
Stock Message Model

-front end has routes that trigger functions to find info in the db


API endpoints
https://api.stocktwits.com/api/2/streams/symbol/fb.json
https://www.quandl.com/api/v3/datasets/YAHOO/FB.json?api_key=4wwJkhJNy-Me_9N33zxc
https://api.coindesk.com/v1/bpi/currentprice.json



http://www.coindesk.com/api/
https://www.quandl.com/data/YAHOO/UA-UA-Under-Armour-Inc-Class-A-Comm
http://stocktwits.com/developers/docs/api#streams-symbol-docs

