const { badRequestError } = require('../lib');

const payload = (req, res, next) => {
  console.log('Payload .....');
  const { payload } = req.body;
  console.log({ payload });
  if (payload === null) {
    next(badRequestError('Malformed payload'));
  } else {
    req.payload = payload;
    next();
  }
};

module.exports = payload;
