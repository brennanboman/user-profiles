var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('../config.js')
var profileCtrl = require('../controllers/profileCtrl.js');
var userCtrl = require('../controllers/userCtrl.js')
var port = 3000;

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret  }));

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.post('/api/login', userCtrl.login);







app.listen(port, function(){
  console.log("listening on port", port);
});
