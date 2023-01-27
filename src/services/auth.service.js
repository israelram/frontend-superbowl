// Servicio de autenticación
const jwt = require('jsonwebtoken');
const config = require('../config/auth.js');

module.exports = {
  createToken: (user) => {
    return jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
  },

  verifyToken: (token) => {
    return jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return false;

      return decoded;
    });
  }
};
