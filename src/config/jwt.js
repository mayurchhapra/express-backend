/**
 * Author: Mayur Chhapra
 * Note: This file will used to validate the JWT token
 */

const jwt = require('express-jwt');

module.exports = jwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ['RS256'],
});
