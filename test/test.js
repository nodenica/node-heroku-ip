var express = require('express');
var herokuIp = require('../');
var app = express();

app.use(herokuIp(['production']));

app.get('/', function(req, res) {
  res.send(req.heroku.ip);
});

app.listen(process.env.PORT || 5000);
