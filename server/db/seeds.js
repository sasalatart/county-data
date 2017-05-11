const mongoose = require('.');
const data = require('./data.json');
const County = require('../models/county');

console.log('Seeding data...');

County.remove({}).then(() => {
  Promise.all(data.map(countyJSON => {
    let county = new County(countyJSON);
    return county.save();
  })).then(() => {
    console.log('Finished seeding data. Closing connection...');
    mongoose.connection.close();
    process.exit();
  });
});
