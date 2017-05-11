const data = require('./data.json');
const County = require('../models/county');

function seed() {
  data.forEach(countyJSON => {
    let county = new County(countyJSON);
    return county.save();
  });
}

module.exports = seed;
