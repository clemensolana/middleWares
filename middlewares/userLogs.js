const fs = require('fs');

const path = require('path');

function regMiddleware(req, res, next) {
  const ruta = path.join(__dirname, '..', 'logs', 'userLogs.txt');
  fs.appendFileSync(ruta, 'se ingresó en la página ' + req.url);
  next();
}

module.exports = regMiddleware;
