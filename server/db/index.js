const mongoose = require('mongoose');
const bluebird = require('bluebird');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/countyData';
mongoose.connect(MONGODB_URI);
mongoose.Promise = bluebird;

module.exports = mongoose;
