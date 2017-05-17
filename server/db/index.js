const mongoose = require('mongoose');
const bluebird = require('bluebird');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_HOST = process.env.MONGODB_HOST || 'mongo_db';
const DB_PORT = process.env.MONGODB_PORT || '27017';
mongoose.connect(MONGODB_URI || `mongodb://${DB_HOST}:${DB_PORT}/county-data`);
mongoose.Promise = bluebird;

module.exports = mongoose;
