StockTwits Lite allows you to see the last 30 messages for a stock from the Dow Jones Industrial Average from the StockTwits API.

Technologies used:
- Node.js
- Express
- MongoDB
- Vue.js

Setup
- clone down repository
- run npm install from main directory
- start MongoDB
- run worker.js once from main directory to add the 30 most recent messages for the 30 DJIA companies to MongoDB
- run node server/index.js
- navigate to http://localhost:8000/

Note: StockTwits API is rate limited to 200 requests per hour for unauthenticated calls(authenticated is 400 per hour). This was why I didn't choose to use the entire S&P 500 list and is why the worker.js is not setup to run every time a user enters in a stock.
