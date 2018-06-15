var jwt = require('jsonwebtoken');
var config = require('../config/configauth');

function verificaToken(req, res, next) {

  var token = req.headers['x-access-token'];

  if (!token)
    return res.status(403).send({ user: null, message: 'No token provided.' });

  jwt.verify(token, config.secret, function(err, decoded) {

    if (err)
      return res.status(500).send({ user: null, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.cpf = decoded.cpf;
    next();
  });
}

module.exports = verificaToken;