const HttpStatus = require('http-status-codes');

const responseMiddleware = (req, res, next) => {
  const payload = res.payload || {};

  const status = payload.status || HttpStatus.OK;
  res.status(status).json(payload);
};

module.exports = responseMiddleware;
