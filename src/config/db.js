const {MongoClient} = require('mongodb');

const db = new MongoClient(process.env.MONGODB_URL);

module.exports = db;