const mongoose = require('mongoose');
const bluebird = require('bluebird');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/countyData`);
mongoose.Promise = bluebird;

module.exports = mongoose;
