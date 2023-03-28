const express = require('express');
// start express server
const app = express();
require('dotenv').config();
const http = require('http').createServer(app);
const {setupSocket} = require('./src/startup/socket');
// colling startup files
require('./src/startup/prod')(app);
require('./src/startup/routes')(app);
require('./src/startup/dbConfig')();
require('./src/startup/config')();
setupSocket(http);

// Setup server port
const port = process.env.PORT || 8000;

// listen for requests
http.listen(port, () => console.log(`INFO: ON PORT TO ${port}`)); 
