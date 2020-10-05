const mongoose = require('mongoose');
const uriFormat = require('mongodb-uri');

const configDb = {
  host: process.env.MONGODB_URL,
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 15000,
    },
  },
};

function encodeMongoURI(urlStringParam) {
  let urlString;
  if (urlStringParam) {
    const parsed = uriFormat.parse(urlStringParam);
    urlString = uriFormat.format(parsed);
  }
  return urlString;
}

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(encodeMongoURI(configDb.host));

const db = mongoose.connection;

module.exports = db;
