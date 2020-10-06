const error = require('./errorHandler.middleware');
const payload = require('./payload.middleware');
const response = require('./response.middleware');

module.exports = {
  error,
  payload,
  response,
};
