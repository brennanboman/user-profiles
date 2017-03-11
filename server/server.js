var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('../config.js')
var port = 3000;

app.use(bodyParser.json());
app.use(cors(corsOptions));

var corsOptions = {
  origin: 'http://localhost:3000'
}









app.listen(port, function(){
  console.log("listening on port", port);
});
