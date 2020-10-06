const HttpError = require('http-custom-errors');
const CryptoService = require('./crypto');

module.exports.CryptoService = CryptoService;

const notFoundError = (message) => {
  return new HttpError.NotFoundError(message);
};

const badRequestError = (message) => {
  return new HttpError.BadRequestError(message);
};

const notImplementedError = (message) => {
  return new HttpError.NotImplementedError(message);
};

const serverError = (message) => {
  return new HttpError.InternalServerError(message);
};

module.exports.NotFoundError = notFoundError;
module.exports.BadRequestError = badRequestError;
module.exports.NotImplementedError = notImplementedError;
module.exports.ServerError = serverError;
