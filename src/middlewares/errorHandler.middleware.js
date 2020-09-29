const HttpStatus = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  console.log('Error: ', err)
  const status = err.code || HttpStatus.INTERNAL_SERVER_ERROR;
  if (err.name === 'ValidationError') {
    status = HttpStatus.BAD_REQUEST;
  }

  if (err.name === 'UnauthorizedError') {
    status = HttpStatus.UNAUTHORIZED;
  }

  if (process.env.NODE_ENV !== 'development') {
    delete err['stack'];
  } else {
    console.log(err);
  }
  res.status(status).json(err);
};

module.exports.errorHandler = errorHandler;