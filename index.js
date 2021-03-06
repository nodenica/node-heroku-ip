/**
* Get ip from heroku headers
* https://devcenter.heroku.com/articles/http-routing#heroku-headers
*/
var _ = require('underscore');
module.exports = function(environments) {
  environments = environments || ['production'];
  return function(req, res, next) {
    req.heroku = req.heroku || {};
    if (_.contains(environments, process.env.NODE_ENV)) {
      req.heroku.ip = req.headers['x-forwarded-for'];
      next();
    }
    else {
      req.heroku.ip = '0.0.0';
      next();
    }
  };
};
