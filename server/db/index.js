const mongoose = require('mongoose');
const bluebird = require('bluebird');

const DB_HOST = process.env.MONGODB_HOST || 'mongo_db';
const DB_PORT = process.env.MONGODB_PORT || '27017';
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/acmKiosk`);
mongoose.Promise = bluebird;

module.exports = mongoose;
