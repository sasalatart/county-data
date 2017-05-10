const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = bluebird;
