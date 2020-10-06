const HttpStatus = require('http-status-codes');

function promiseWrapper(handler) {
  return (req, res, next) => {
    handler(req, res)
      .then(({ data, status, message, responseType }) => {
        res.status(status || HttpStatus.OK);
        res.payload = {
          data,
          status,
          message,
          responseType,
        };
        next();
      })
      .catch(next);
  };
}

module.exports.promiseWrapper = promiseWrapper;
