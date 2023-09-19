const fs = require('fs');

function loginMiddleware(req, res, next) {
  fs.appendFileSync('log.txt', 'se ingresó en la página ' + req.url);
  next();
}

module.exports = loginMiddleware;
