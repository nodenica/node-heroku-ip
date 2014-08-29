node-heroku-ip
==============

Ip middleware for ExpressJS running on Heroku

### Installation

    npm install heroku-ip

### Usage

    var express = require('express');
    var herokuIp = require('heroku-ip')
    var app = express();

    app.use(herokuIp(['production']));

    app.get('/', function(req, res){
      res.send(req.heroku.ip);
    });

    app.listen(3000);
