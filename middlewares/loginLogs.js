const fs = require('fs');

const path = require('path');

function loginMiddleware(req, res, next) {
  const ruta = path.join(__dirname, '..', 'logs', 'loginLogs.txt');
  fs.appendFileSync(ruta, 'se ingresó en la página ' + req.url);
  next();
}

module.exports = loginMiddleware;
